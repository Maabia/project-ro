import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


 hearders = { "content-Type": "aplication/json"};

  constructor(private httpCliente: HttpClient) { }

  cadastroCliente(cliente: Cliente) {
    return this.httpCliente.post(environment.dashWork.cliente.cadastro , JSON.stringify(cliente),
    { observe: "response", headers: this.hearders })
  }
}
