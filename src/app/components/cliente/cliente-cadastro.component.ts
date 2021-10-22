import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './model/cliente';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  clienteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService

    ) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: ["",
        [
          Validators.required,
        ]
      ],
      telefone: ["",
      [
        Validators.required,
        Validators.pattern("^\\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$")
      ]
    ]
    })
  }

  enviarCliente() {

    const cliente = this.clienteForm.value as Cliente;
    console.log(cliente)
    this.clienteService.cadastroCliente(cliente).subscribe((res) => {
      if (res.ok) {
        alert("Cadastro feito com sucesso!")
      }
    }, err => {
      alert("Erro no cadastro, tente novamente!")
    })
    this.clienteForm.reset();
  }

}

