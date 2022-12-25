import { AppService } from 'src/app/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codigo: any
  constructor(private app: AppService){
    this.codigo = this.app.getCodigo()
  }

  ngOnInit(): void{
  }
}
