import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormacionPageComponent } from './pages/formacion-page/formacion-page.component';
import { TecnologiasPagesComponent } from './pages/tecnologias-pages/tecnologias-pages.component';
import { ExperienciaPageComponent } from './pages/experiencia-page/experiencia-page.component';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ClockComponent } from './pages/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormacionPageComponent,
    TecnologiasPagesComponent,
    ExperienciaPageComponent,
    SobreMiComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
