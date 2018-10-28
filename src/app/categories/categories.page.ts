import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  testCats = [];

  constructor() { }

  ngOnInit() {
    this.generateTestArray();
  }

  generateTestArray(){
    for(var i=0; i<=20; i++){
      var testObj = {name: "categorie" + i}
      this.testCats.push(testObj); 
    }
  }

}
