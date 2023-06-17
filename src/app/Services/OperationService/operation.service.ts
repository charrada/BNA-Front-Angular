import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credit } from 'app/models/Credit';
import { operation } from 'app/models/Operation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  operations: operation[] = [];
  Burl = environment.baseUrl;
  url = environment.baseUrl + 'operation/';

  constructor(private http: HttpClient) { }

 


  public findAllOperation(): Observable<operation[]> {
    return this.http.get<operation[]>(this.url);
  }


  public findOperationsByCreditId(creditId: number): Observable<operation[]> {
    return this.http.get<operation[]>(this.url +"credit/"+ creditId);
  }


  public findCreditByDebiteurId(debiteurId: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.Burl +"credit/"+ debiteurId);
  }

  


  public addOperation(operation: operation): Observable<operation> {
    return this.http.post<operation>(this.url + 'add', operation);
  

  }
  
 
  
}
