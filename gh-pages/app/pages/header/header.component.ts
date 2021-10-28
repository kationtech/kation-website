import { Component, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobileMenu: boolean = false;

  constructor( private route: Router ) {}

  ngOnInit(): void {

  }

  showMenu(){
    this.mobileMenu = !this.mobileMenu
  }

}
