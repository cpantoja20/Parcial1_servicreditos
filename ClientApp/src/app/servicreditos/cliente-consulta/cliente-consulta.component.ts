import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {
  cliente: Clientes[];
  searchText:string;

  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.cliente = this.clienteService.get();
  }

}