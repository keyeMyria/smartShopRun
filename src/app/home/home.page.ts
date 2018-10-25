import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.interface';

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
    private navCtrl: NavController) {

     }

  ngOnInit() {
    this.getStatus();
  }

  /**
   * Vor dem App Start überprüfen, ob ein erst Start vorhanden ist
   */
  getStatus(){
    if(this.firstStart){
      this.navCtrl.navigateRoot("/firstStart");
    }
    if(this.loggedin){
      this.navCtrl.navigateRoot("/home");
    }
    if(this.notLoggedin){
      this.navCtrl.navigateRoot("/login");
    }
    if(this.register){
      this.navCtrl.navigateRoot("/register");
    }
  }
}
