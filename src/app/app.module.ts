import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import {Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import {HttpClientModule} from "@angular/common/http";
import { EscuelasComponent } from './escuelas/escuelas.component'
import { FormEscuelaComponent } from './escuelas/form-escuela.component';

const routes: Routes=[
  {path: '',redirectTo:'/escuelas', pathMatch:'full'},
  //esto me redirige a mi lista de escuelas
  {path: 'escuelas',component : BodyComponent},
  {path: 'escuelas/form',component : FormEscuelaComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    EscuelasComponent,
    FormEscuelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
