import { Component, OnInit } from '@angular/core';
import keys from '../../../global/keys';

@Component({
  selector: 'app-personal-description',
  templateUrl: './personal-description.component.html',
  styleUrls: ['./personal-description.component.scss']
})
export class PersonalDescriptionComponent implements OnInit {

  keys = keys;
  
  constructor() { }

  ngOnInit(): void {
  }

}
