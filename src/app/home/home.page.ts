import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.interface';
import { LocalStorageService } from '../../services/local-storage.service';

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

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService) {

     }

  ngOnInit() {
    this.getStatus();
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
          console.log("not started jet")
          this.navCtrl.navigateRoot("/firstStart");
        }
        if(alreadyStarted){
          this.storageService.getFromStorage("keepLoggedin")
            .then((keepLoggedIn)=>{
              if(keepLoggedIn){
                console.log("keepLoggedIn")
                console.log(keepLoggedIn)
                this.storageService.getFromStorage("user")
                  .then((curUser)=>{
                    console.log(curUser)
                    this.user = curUser;
                    this.navCtrl.navigateRoot("/home");
                  });
              }
              else{   
                console.log("keepLoggedIn")
                console.log(keepLoggedIn)
                this.navCtrl.navigateRoot("/login-register");
              }
            });   
        }
      });  
  }
}
