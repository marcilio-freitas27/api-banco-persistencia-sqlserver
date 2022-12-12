import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correntistas: any[];
  show: boolean
  constructor(private app: AppService) {
    this.correntistas = [];
    this.show = false;
   }

  ngOnInit(): void {
    this.app.getCorrentistas().subscribe({
      next: (res: any) => {
        this.correntistas = res,
        console.log(res)
      }
    });
  }

  showSaldo(){
    this.show = !this.show;
  }

}
