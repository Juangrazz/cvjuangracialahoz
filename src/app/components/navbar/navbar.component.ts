import { Component, OnInit } from '@angular/core';
import keys from '../../../global/keys';
import { ScrollService } from '../../services/scroll.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  keys = keys;

  constructor( private scrollService: ScrollService) { }

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
