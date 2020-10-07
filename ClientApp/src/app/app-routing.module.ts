import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteConsultaComponent } from './servicreditos/cliente-consulta/cliente-consulta.component';
import { Routes, RouterModule } from '@angular/router';
import {ClienteRegistroComponent} from './servicreditos/cliente-registro/cliente-registro.component';

const routes: Routes = [
  {
  path: 'clienteConsulta',
  component: ClienteConsultaComponent
  },
  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent
    },
  
  ];
  @NgModule({
  declarations: [],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  })
export class AppRoutingModule { }
