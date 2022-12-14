import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string
  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000";
  }

  getCorrentistas(): Observable<any>{
    return this.http.get<any>(`${this.url}/correntista`);
  }

  sendCorrentistas(nome: string, email: string, saldo: any): Observable<any>{
    return this.http.post(`${this.url}/correntista`, {
      "NomeCorrentista": nome,
      "Email": email,
      "Saldo": saldo}
    );
  }

  sendDeposito(id: any, valor: any): Observable<any>{
    return this.http.post(`${this.url}/deposito`, {
      "CodigoCorrentista": id,
      "Valor": valor
    });
  }

  sendSaque(id: any, valor: any): Observable<any>{
    return this.http.post(`${this.url}/saque`, {
      "CodigoCorrentista": id,
      "Valor": valor
    });
  }

  sendPagamento(id: any, valor: any): Observable<any>{
    return this.http.post(`${this.url}/pagamento`, {
      "CodigoCorrentista": id,
      "Valor": valor
    });
  }

  sendTransferencia(nome: any, nomeDestino: any, saldo: any): Observable<any>{
    return this.http.post(`${this.url}/transferencia/${nome}`, {
      "CodigoCorrentistaDestino": nomeDestino,
      "Valor": saldo}
    );
  }



  sendExtrato(nome: any, dataInicial: any, dataFinal: any): Observable<any>{
    let headers = {
      "CogigoCorrentista": nome,
      "DataInicial": dataInicial,
      "DataFinal": dataFinal
    }
    return this.http.get<any>(`${this.url}/extrato`,{headers});
  }
}
