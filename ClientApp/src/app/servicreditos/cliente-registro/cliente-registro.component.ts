import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Clientes } from '../models/clientes';


@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  cliente: Clientes;
 
 constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Clientes;
  }
  add() {
    alert('Cliente Agregado' + JSON.stringify(this.cliente));
    this.clienteService.post(this.cliente);
  }
  
}

