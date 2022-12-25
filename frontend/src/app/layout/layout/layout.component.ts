import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = 'Angular Bank v1.0.0 - Marcílio Freitas';
  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.login.logout();
  }

}
