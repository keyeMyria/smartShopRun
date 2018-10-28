import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, Slides } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { User } from '../../models/user.interface';
import { SozialLoginService } from '../../services/sozial-login/sozial-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('pageSlider') pageSlider: Slides;  
  user = {} as User;
  samePassword: boolean = true;
  index: number = 0;

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService,
    private toastCtrl: ToastController,
    private sozialLoginService: SozialLoginService) {
      
    }

  ngOnInit() {
  }

  /**
   * Registriert einen Nuter in der Datenbank und speichert ihn im local Storage
   * @param user 
   */
  register(user:User, type: string){
    if(type=="email"){
      this.user.provider = "smartShopRun"
      this.storageService.saveInStorage("user", user)
        .then(()=>{
          this.navCtrl.navigateRoot("/home/fromLogin");
        }); 
    }
    else{
      // Facebook register
      this.sozialLoginService.socialSignIn('facebook')
      .then(userData =>{
        this.user.id = userData.id;
        this.user.email = userData.email;
        this.user.name = userData.name;
        this.user.provider = userData.provider;
        this.storageService.saveInStorage("user", user)
        .then(()=>{
          this.navCtrl.navigateRoot("/home/fromLogin");
        }); 
      })
      // ERROR
      .catch(e =>{
        console.log(e.message)
      });
    }
  }

  /**
   * Überprüft die Passwörter auf Gleichheit
   * @param password1 
   * @param password2 
   */
  passwordCheck(pw1: string, pw2: string){
    if(pw1 != pw2){
      // ungleich
      this.samePassword = false;
    }
    else{
      // gleich
      this.samePassword = true;      
    }
  }

  /**
   * Löscht den Input eines bestimmten Inputes
   */
  deleteInput(input: string){
    switch (input) {
      case "email":
        this.user.email = ""
        break;
      case "name":
        this.user.name = ""
        break;
      case "password1":
        this.user.password1 = ""
        break;
      case "password2":
        this.user.password2 = ""
        break;
      case "birthDate":
        this.user.birthDate = null;
        break;
    }
  }

  /**
   * Verschiebt den Slider, entweder wird der email register angezeigt doer der Facebook register
   * @param indx 
   */
  changeSlide(indx: number){
    this.index = indx;
    this.pageSlider.slideTo(indx);
  }

  /**
   * Zeigt einen Toast
   */
  async showToast(message: string){
    const toast = await this.toastCtrl.create({
      message: message,     
      position: 'bottom',
      mode: 'ios',
      duration: 2000
    });
    toast.present();
  }
}
