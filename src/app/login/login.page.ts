import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;
  keepLoggedin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService,
    private toastCtrl: ToastController) { 

    }

  ngOnInit() {
  }

  /**
   * Legged den user ein.
   * Bei erfolgreichem Login => weiter an HomePage
   * Wenn keepLoggedin checked, wird in local Storage vermerkt
   */
  login(user : User){
    if(user.email != "" && user.password != "" && user.email != undefined && user.password != undefined){
    this.storageService.saveInStorage("user", user)
      .then(()=>{
        if(this.keepLoggedin){
          this.storageService.saveInStorage("keepLoggedin", true)
          .then(()=>{
            this.navCtrl.navigateRoot("/home");
          });
        }
        else{
          this.storageService.saveInStorage("oneTimeLoggin", true)
          .then(()=>{
            this.navCtrl.navigateRoot("/home/" + "fromLogin");
          })
        }       
      });
    }
    else{
      this.showToast("Please fill in all loggin information.");
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
      case "password":
        this.user.password = ""
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
