import { Component, OnInit } from '@angular/core';
import { Tecnologias } from 'src/app/models/tecnologias';
import { TecnologiasService } from 'src/app/shared/tecnologias.service';
@Component({
  selector: 'app-tecnologias-pages',
  templateUrl: './tecnologias-pages.component.html',
  styleUrls: ['./tecnologias-pages.component.css']
})
export class TecnologiasPagesComponent implements OnInit {

  tecnologias: Tecnologias[] = [];

  constructor(private tecnologiasService: TecnologiasService) {}

  getTecnologias(): void{
    this.tecnologiasService.getTecnologias()
    .subscribe(tecnologias => this.tecnologias = tecnologias);
  }

  ngOnInit(): void {
    this.getTecnologias();
  }

}
