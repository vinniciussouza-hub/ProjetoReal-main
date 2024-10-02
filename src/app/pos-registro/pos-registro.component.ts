import { Component } from '@angular/core';

@Component({
  selector: 'app-pos-registro',
  templateUrl: './pos-registro.component.html',
  styleUrls: ['./pos-registro.component.css']
})
export class PosRegistroComponent {
  alimentosRegistrados = [
    { nome: 'Arroz', quantidade: 10, dataValidade: '2024-12-01', descricao: 'Pacote de arroz', doador: 'Supermercado XYZ' }
  ];

  empresas = [
    { nome: 'Instituição X', endereco: 'Endereço 1' },
    { nome: 'Supermercado Y', endereco: 'Endereço 2' },
    { nome: 'Restaurante Z', endereco: 'Endereço 3' }
  ];
}
