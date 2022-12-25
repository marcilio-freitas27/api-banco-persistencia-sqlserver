import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  codigo: any
  constructor(private app: AppService) {
    this.codigo = this.app.getCodigo();
  }

  ngOnInit(): void {
  }

  pagamento(id: any, valor: any): void{
    this.app.sendPagamento(
      id,
      valor
    ).subscribe(data =>{
      console.log(data)
    })
  }

}
