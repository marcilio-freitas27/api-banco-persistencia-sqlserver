import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  extrato(nome: any, dataInicial: any, dataFinal:any):void{
    this.app.sendExtrato(
      nome,
      dataInicial,
      dataFinal
    );
  }

}
