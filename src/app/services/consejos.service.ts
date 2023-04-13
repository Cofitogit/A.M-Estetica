import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsejosService {
  private jsonUrl = '../../assets/consejos.json';


  constructor(private http: HttpClient) { }

  getConsejos(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
