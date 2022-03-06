import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  firstTime: string;
  hour: string;
  showFirstTime = true;

  constructor() {

    this.firstTime = moment().format('HH: mm: ss');
    this.hour = moment().format('HH: mm: ss');
   }

  ngOnInit(): void {

    setInterval(() => {
      this.showFirstTime = false;
      this.hour = moment().format('HH: mm: ss');
    }, 1000);

  }

}
