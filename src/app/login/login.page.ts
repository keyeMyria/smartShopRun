import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private storageService: LocalStorageService) { 

    }

  ngOnInit() {
  }

  /**
   * Legged den user ein.
   * Bei erfolgreichem Login => weiter an HomePage
   */
  login(user : User){
    this.storageService.saveInStorage("user", user)
      .then(()=>{
        this.navCtrl.navigateRoot("/home");
      });
  }

}
