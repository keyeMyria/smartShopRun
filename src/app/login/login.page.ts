import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService) { 

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
