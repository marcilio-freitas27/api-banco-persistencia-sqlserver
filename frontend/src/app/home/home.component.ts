import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correntistas: any;
  correntista: any[];
  show: boolean
  codigo: any
  constructor(private app: AppService) {
    this.show = false;
    this.codigo = this.app.getCodigo();
    this.correntista = [];
   }

  ngOnInit(): void {
    this.app.getCorrentistasId(this.codigo).subscribe({
      next: (res: any) => {
        this.correntistas = res
      }
    });

    this.app.getCorrentistas().subscribe({
      next:(res:any) =>{
        this.correntista = res;
      }
    })
  }

  showSaldo(){
    this.show = !this.show;
  }

}
