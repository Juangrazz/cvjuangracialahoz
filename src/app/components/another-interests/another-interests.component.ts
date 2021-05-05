import { Component, OnInit } from '@angular/core';
import keys from '../../../global/keys';

@Component({
  selector: 'app-another-interests',
  templateUrl: './another-interests.component.html',
  styleUrls: ['./another-interests.component.scss']
})
export class AnotherInterestsComponent implements OnInit {

  keys = keys;
  
  constructor() { }

  ngOnInit(): void {
  }

}
