import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from 'src/app/models/formacion';
import { FormacionService } from 'src/app/shared/formacion.service';

@Component({
  selector: 'app-formacion-page',
  templateUrl: './formacion-page.component.html',
  styleUrls: ['./formacion-page.component.css']
})
export class FormacionPageComponent implements OnInit {

  formaciones: Formacion[] = [];

  constructor(private formacionService: FormacionService) {}

  getFormaciones(): void{
    this.formacionService.getFormaciones()
    .subscribe(formaciones => this.formaciones = formaciones);
  }

  ngOnInit(): void {
    this.getFormaciones();
  }

}

