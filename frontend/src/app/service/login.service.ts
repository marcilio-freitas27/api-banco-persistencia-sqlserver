import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;
  text: any
  constructor(
    private http: HttpClient,
    private route: Router,
    private app: AppService
    ) {
    this.url = 'http://localhost:5000';
  }

  login(usuario: any, senha:any): Observable<any>{
    let result: any;
    this.http.get(`${this.url}/correntista`).subscribe(
      {
      next: (res: any) => {
        let count = 0;
        res.map((data: any)=> {
          if (data.NomeCorrentista === usuario && data.Email === senha){
            this.app.setCodigo(data.CodigoCorrentista)
            localStorage.setItem('dados', usuario + ' ' + ' ' + senha);
            count++
            result = this.route.navigate(['/layout/home']);
          }
        });
        if(count === 0){
          result =  window.alert('Usuario ou senha incorretos.')
        }
      }
    })
    return result;
  }

  logout(): void{
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
