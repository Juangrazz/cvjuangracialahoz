import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToPersonal() {
    console.log($("#personal")[0].scrollIntoView());
    
    $("#personal")[0].scrollIntoView();
  }
}
