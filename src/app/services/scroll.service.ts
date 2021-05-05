import { Injectable } from '@angular/core';
import { SmoothScrollService } from '@boatzako/ngx-smooth-scroll';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private smooth: SmoothScrollService) { }

  toPersonalDescription(){
    this.smooth.smoothScroll($("#personal")!.offset().top - 50, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toEducation(){
    this.smooth.smoothScroll($("#educacion")!.offset().top + 50, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toExperience(){
    this.smooth.smoothScroll($("#experiencia")!.offset().top -50, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toComputerSkills(){
    this.smooth.smoothScroll($("#conocimientos")!.offset().top + 50, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toLanguages(){
    this.smooth.smoothScroll($("#idiomas")!.offset().top - 100, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toCompetencies(){
    this.smooth.smoothScroll($("#compyhab")!.offset().top + 50, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toAnotherInterest(){
    this.smooth.smoothScroll($("#otros")!.offset().top - 100, { duration: 1000, easing: 'easeInOutQuart' });
  }

  toContact(){
    this.smooth.smoothScroll($("#contacto")!.offset().top + 50, { duration: 1000, easing: 'easeInOutQuart' });
  }

}
