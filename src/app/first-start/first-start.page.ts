import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-first-start',
  templateUrl: './first-start.page.html',
  styleUrls: ['./first-start.page.scss'],
})
export class FirstStartPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storageService: LocalStorageService) { 

    }

  ngOnInit() {
    this.saveInStorage();
  }

  /**
   * Öffnet die Login-Register Page
   */
  showLoginRegister(){
    this.navCtrl.navigateRoot("/login-register")
  }

  /**
   * Speichert in den lokalen Storage, dass das App Tutorial abgespielt wurde
   */
  saveInStorage(){
    this.storageService.saveInStorage("alreadyStarted", true);
  }
}
