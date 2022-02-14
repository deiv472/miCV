import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Formacion } from 'src/app/models/formacion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private url = 'http://localhost:3000/formacion'

  constructor(private http: HttpClient) {
    

  }


  getFormaciones(): Observable<Formacion[]>{

      return this.http.get<Formacion[]>(this.url);

  }

}