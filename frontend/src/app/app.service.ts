import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  sendTransferencia(nome: number, nomeDestino: number, valor: number): Observable<any>{
    return this.http.post(`${this.url}/transferencia`, {
      "CodigoCorrentistaOrigem": nome,
      "CodigoCorrentistaDestino": nomeDestino,
      "Valor": valor}
    );
  }


  sendExtrato(nome: any, dataInicial: any, dataFinal: any): Observable<any>{
    return this.http.get(`${this.url}/extrato/${nome}/${dataInicial}/${dataFinal}`)
  }

}
