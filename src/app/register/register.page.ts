import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User;
  samePassword: boolean = true;

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService,
    private toastCtrl: ToastController) {
      
    }

  ngOnInit() {
  }

  /**
   * Registriert einen Nuter in der Datenbank und speichert ihn im local Storage
   * @param user 
   */
  register(user:User){
    this.storageService.saveInStorage("user", user)
      .then(()=>{
        this.navCtrl.navigateRoot("/home");
      }); 
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
      case "firstName":
        this.user.firstName = ""
        break;
      case "lastName":
        this.user.lastName = ""
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
