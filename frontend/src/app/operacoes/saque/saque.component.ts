import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
  }

  saque(id: any, valor: any): void{
    this.app.sendSaque(
      id,
      valor
    ).subscribe(data =>{
      console.log(data)
    })
  }

}
