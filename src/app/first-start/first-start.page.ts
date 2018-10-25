import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-first-start',
  templateUrl: './first-start.page.html',
  styleUrls: ['./first-start.page.scss'],
})
export class FirstStartPage implements OnInit {

  showSlides: boolean = false;
  showBtns: boolean = false;

  constructor(
    private navCtrl: NavController) { 

    }

  ngOnInit() {
  }

  /**
   * Zeigt die Slides beim ersten öffnen der App nach Betätigung des "Einkaufswagen" Buttons
   */
  aktivateSlides(){
    this.showSlides = true;
  }

  /**
   * Zeigt die Buttons Login oder Register nach Betätigen des "Let's get you started" Buttons
   */
  showLoginRegister(){
    this.showSlides = false;
    this.showBtns = true;
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
