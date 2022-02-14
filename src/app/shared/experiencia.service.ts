import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Experiencia } from 'src/app/models/experiencia';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url = 'http://localhost:3000/experiencia'

  constructor(private http: HttpClient) {
    

  }


  getExperiencias(): Observable<Experiencia[]>{

      return this.http.get<Experiencia[]>(this.url);

  }

}