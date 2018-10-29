import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  appPages = [
    {
      title: "Home",
      url: "/home"
    },
    {
      title: "Store",
      url: "/store"
    },
    {
      title: "Angebote",
      url: "/deals"
    },
    {
      title: "Friends",
      url: "/friends"
    },
    {
      title: "Groups",
      url: "/groups"
    },
  ]

  ngOnInit() {
  }

}
