import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { operation } from 'app/models/Operation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  operations: operation[] = [];
  url = environment.baseUrl + 'operation/';

  constructor(private http: HttpClient) { }

 


  public findAllOperation(): Observable<operation[]> {
    return this.http.get<operation[]>(this.url);
  }


  public findOperationById(id: number): Observable<operation> {
    return this.http.get<operation>(this.url + id);
  }





}
