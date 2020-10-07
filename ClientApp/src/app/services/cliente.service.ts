import { Injectable } from '@angular/core';
import { Clientes } from '../servicreditos/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  get(): Clientes[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(cliente: Clientes) {
    cliente.total= cliente.capitalInicial*Math.pow((cliente.tasainteres/100)+1,cliente.tiempo);
    let clientes: Clientes[] = [];
    if (this.get() != null) {
      clientes = this.get();
    }
    clientes.push(cliente);
    localStorage.setItem('Datos', JSON.stringify(clientes));
  }

}

