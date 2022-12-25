import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratoCorrentista: any;
  modal: boolean = true;
  codigo: any;
  constructor(private app: AppService) {
    this.codigo = this.app.getCodigo();
  }

  ngOnInit(): void {

  }

  extrato(nome: any, dataInicial: any, dataFinal:any):any {
    this.app.sendExtrato(
      nome,
      dataInicial,
      dataFinal).subscribe({
        next: (retorno: any) => this.extratoCorrentista = retorno
      });
    this.modal = false;
  }

}
