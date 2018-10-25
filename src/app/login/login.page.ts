import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController) { 

    }

  ngOnInit() {
  }

  /**
   * Legged den user ein.
   * Bei erfolgreichem Login => weiter an HomePage
   */
  login(){
    this.navCtrl.navigateRoot("/home");
  }

}
