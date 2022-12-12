import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DepositoComponent } from './operacoes/deposito/deposito/deposito.component';
import { SaqueComponent } from './operacoes/saque/saque.component';
import { PagamentoComponent } from './operacoes/pagamento/pagamento.component';
import { TransferenciaComponent } from './operacoes/transferencia/transferencia.component';
import { CorrentistaComponent } from './cadastros/correntista/correntista.component';
import { ExtratoComponent } from './operacoes/extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DepositoComponent,
    SaqueComponent,
    PagamentoComponent,
    TransferenciaComponent,
    CorrentistaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
