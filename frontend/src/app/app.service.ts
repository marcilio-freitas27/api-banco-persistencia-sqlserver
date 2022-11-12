import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string
  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000";
  }

  getCorrentistas(): Observable<any>{
    return this.http.get<any>(`${this.url}/correntista`);
  }
}
