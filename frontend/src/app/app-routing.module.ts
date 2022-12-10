import { TransferenciaComponent } from './operacoes/transferencia/transferencia.component';
import { PagamentoComponent } from './operacoes/pagamento/pagamento.component';
import { DepositoComponent } from './operacoes/deposito/deposito/deposito.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaqueComponent } from './operacoes/saque/saque.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'saque', component: SaqueComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'transferencia', component: TransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
