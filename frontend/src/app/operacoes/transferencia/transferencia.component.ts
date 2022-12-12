import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  transferencia(id: any, idDestino: any, valor:any ):void{
    this.app.sendTransferencia(
      id,
      idDestino,
      valor
    );
  }

}
