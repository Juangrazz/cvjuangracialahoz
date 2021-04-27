import { Component, OnInit } from '@angular/core';
import keys from '../../../global/keys';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  keys = keys;
  
  constructor() { }

  ngOnInit(): void {
        // Collapse Navbar
        this.navbarCollapse();
        $(window).scroll(this.navbarCollapse);

  }

  navbarCollapse() {
    if ($("#mainNav").offset().top > 80) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};



}
