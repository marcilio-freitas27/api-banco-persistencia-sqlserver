import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  codigo: any;
  constructor(
    private loginService: LoginService,
    private app: AppService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  login(usuario: any, senha: any){
    if(usuario === 'marcilio' && senha === '123'){
      this.app.setCodigo(4);
      this.codigo = this.app.getCodigo();
      this.route.navigate(['/home']);
    }else{
      window.alert('Usuario ou senha incorretos.')
    }
  }

  logar(usuario: any, senha:any): void{
    this.codigo = this.app.getCodigo();
    this.loginService.login(usuario, senha)
  }
}
