import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User;

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService) {
      
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
}
