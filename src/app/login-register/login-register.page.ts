import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  /**
   * Öffnet wahlweise die Login oder Register Page
   * @param page 
   */
  openPage(page: string){
    if(page=="LoginPage"){
      this.navCtrl.navigateForward("/login")  
    }
    else{
      this.navCtrl.navigateForward("/register")
    }
  }
}
