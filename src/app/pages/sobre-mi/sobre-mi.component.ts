import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  flag = false;

  constructor() { }

  cambiarFlag(){
    this.flag = !this.flag;
  }

  ngOnInit(): void {
    this.cambiarFlag();
  }

  

}
