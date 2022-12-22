import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  cadastrarCorrentista(nome: string, email:string, saldo:any): void{
    this.app.sendCorrentistas(
      nome,
      email,
      saldo
    )
  }

}
