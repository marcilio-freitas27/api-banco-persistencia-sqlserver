import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratoCorrentista: any[];
  modal: boolean = true;
  id: any;
  dataInicio: any;
  dataFim: any
  constructor(private app: AppService) { 
    this.extratoCorrentista = [];
  }

  ngOnInit(): void {
    
  }

  extrato(nome: any, dataInicial: any, dataFinal:any):void {
    this.app.sendExtrato(
      nome,
      dataInicial,
      dataFinal
    ).subscribe({
      next: (res: any[]) => {
        this.extratoCorrentista = res
      }
    });
    this.modal = false;
  }

}
