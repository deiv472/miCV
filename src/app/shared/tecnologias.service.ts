import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tecnologias } from '../models/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  private url = 'http://localhost:3000/tecnologias'

  constructor(private http: HttpClient) {
    

  }


  getTecnologias(): Observable<Tecnologias[]>{

      return this.http.get<Tecnologias[]>(this.url);

  }


}