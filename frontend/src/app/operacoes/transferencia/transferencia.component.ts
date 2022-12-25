import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  codigo:any
  constructor(private app: AppService) {
    this.codigo = this.app.getCodigo();
  }

  ngOnInit(): void {
  }

  transferencia(codigo: any, codigoDestino: any, valor:any ):void{
    this.app.sendTransferencia(
      codigo,
      codigoDestino,
      valor
    );
  }

}
