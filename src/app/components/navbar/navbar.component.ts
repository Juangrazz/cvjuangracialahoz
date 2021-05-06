import { Component, OnInit } from '@angular/core';
import keys from '../../../global/keys';
import { ScrollService } from '../../services/scroll.service';
import { LanguageService } from '../../services/language.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  keys = keys;

  constructor(public scrollService: ScrollService, private languageService: LanguageService) { }

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

  changeLanguage(lang: string) {
    this.languageService.setLang(lang);
  }



}
