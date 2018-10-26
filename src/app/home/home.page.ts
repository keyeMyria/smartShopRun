import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  firstStart: boolean = false;
  loggedin: boolean = false;
  register: boolean = false;
  notLoggedin: boolean = false;

  user = {} as User;
  
  id: number;
  private sub: any;

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    this.getRoute();
    //this.getStatus();
  }

  /**
   * Daten aus der url extrahieren
   */
  getRoute(){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        console.log("got data")
      }
      else{
        this.autoLogin();
      }
      // In a real app: dispatch action to load the details here.
   });
  }

  /**
   * Vor dem App Start überprüfen, ob ein erst Start vorhanden ist
   */
  getStatus(){
    //this.storageService.saveInStorage("alreadyStarted", false);
    this.storageService.getFromStorage("alreadyStarted")
      .then((alreadyStarted)=>{
        // erster start, da wert noch nicht in storage
        if(!alreadyStarted){
          console.log("/firstStart")
          this.navCtrl.navigateRoot("/firstStart");         
        }
        else{
          this.autoLogin();
        }
      });  
  }

  /**
   * Funktion für das automatische einloggen
   */
  autoLogin(){
    this.storageService.getFromStorage("keepLoggedin")
    .then((keepLoggedIn)=>{
      if(keepLoggedIn){
        this.getUser();
        console.log("/stayHome");
      }
      else{
        this.storageService.deleteFromStorage("user");
        this.navCtrl.navigateRoot("/login-register");
      }
    });   
  }

  /**
   * Besorgt die Daten des eingeloggten Users aus dem local Storage
   */
  getUser(){
    this.storageService.getFromStorage("user")
    .then((curUser)=>{
      console.log(curUser)
      this.user = curUser;
      this.navCtrl.navigateRoot("/home");
    });
  }

  /**
   * Den aktuellen user ausloggen
   */
  logout(){
    this.storageService.deleteFromStorage("user");
    this.storageService.deleteFromStorage("keepLoggedin");
    this.navCtrl.navigateRoot("/login-register");
  }
}
