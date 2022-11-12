import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  correntistas: any[];
  show: boolean
  constructor(private app: AppService){
    this.correntistas = [];
    this.show = false;
  }

  ngOnInit(): void{
    this.app.getCorrentistas().subscribe({
      next: (res: any) => this.correntistas = res
    });
  }

  showSaldo(){
    this.show = !this.show;
  }
}
