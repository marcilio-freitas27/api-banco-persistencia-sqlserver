import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  codigo:any
  constructor(private app: AppService) {
    this.codigo = this.app.getCodigo();
   }

  ngOnInit(): void {
  }

  deposito(id: any, valor: any): void{
    this.app.sendDeposito(
      id,
      valor
    ).subscribe(data =>{
      console.log(data)
    })
  }

}
