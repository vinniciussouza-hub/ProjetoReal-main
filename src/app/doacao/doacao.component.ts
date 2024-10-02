import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent {
  novoAlimento = {
    nome: '',
    quantidade: null,
    dataValidade: '',
    descricao: '',
    doador: ''
  };

  empresas = [
    { nome: 'Instituição X', endereco: 'Endereço 1' },
    { nome: 'Supermercado Y', endereco: 'Endereço 2' },
    { nome: 'Restaurante Z', endereco: 'Endereço 3' }
  ];

  constructor(private router: Router) {}

  registrarAlimento() {
    // Lógica para registrar o alimento (você pode integrar com o backend aqui)

    // Após o registro, redireciona para a página pós-registro
    this.router.navigate(['/pos-registro']);
  }
}
