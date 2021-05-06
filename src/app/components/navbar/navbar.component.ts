import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'node:vm';
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
  language!: string;

  constructor(public scrollService: ScrollService) { }

  ngOnInit(): void {

    this.language = localStorage.getItem(keys.STORAGE_LANGUAGE) || "esp";

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

  changeLanguage(language: string) {
    localStorage.setItem(keys.STORAGE_LANGUAGE, language);
    this.language = language;
    window.location.reload();
  }



}
