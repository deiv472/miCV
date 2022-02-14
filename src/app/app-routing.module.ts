import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaPageComponent } from './pages/experiencia-page/experiencia-page.component';
import { FormacionPageComponent } from './pages/formacion-page/formacion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TecnologiasPagesComponent } from './pages/tecnologias-pages/tecnologias-pages.component';

const routes: Routes = [
  {path: "home-page", component: HomePageComponent},
  {path: "formacion-page", component: FormacionPageComponent},
  {path: "tecnologias-pages", component: TecnologiasPagesComponent},
  {path: "experiencia-page", component: ExperienciaPageComponent},
  {path: "sobreMi", component: SobreMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
