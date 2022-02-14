import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/shared/experiencia.service'

@Component({
  selector: 'app-experiencia-page',
  templateUrl: './experiencia-page.component.html',
  styleUrls: ['./experiencia-page.component.css']
})
export class ExperienciaPageComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) { }

  getExperiencias(){
    this.experienciaService.getExperiencias()
    .subscribe(experiencias => this.experiencias = experiencias);
  }

  ngOnInit(): void {
    this.getExperiencias();
  }

}
