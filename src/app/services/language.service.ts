import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language!: string;
  localStorage_lang: string = "lang";
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(localStorage.getItem(this.localStorage_lang) || "es");
  }

  setLang(lang: string) {
    localStorage.setItem(this.localStorage_lang, lang);
    this.translate.use(lang);
  }

}
