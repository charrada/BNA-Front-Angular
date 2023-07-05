import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuxiliaireOperation } from 'app/models/AuxiliaireOperation';
import { Credit } from 'app/models/Debiteur';

import { operation } from 'app/models/Operation';
import { TypePaiementOperation } from 'app/models/TypePaiementOperation';

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
    return this.http.get<operation[]>(this.url + 'credit/' + creditId);
  }

  public findCreditByDebiteurId(debiteurId: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.Burl + 'credit/' + debiteurId);
  }

  public findAllTypePaiementOperation(): Observable<TypePaiementOperation[]> {
    return this.http.get<TypePaiementOperation[]>(this.Burl + 'TypeP/');
  }

  public addOperation(operation: operation): Observable<operation> {
    return this.http.post<operation>(this.url + 'add', operation);
  }




  public findAuxiliaireOperationByType(type: string): Observable<AuxiliaireOperation[]> {
    return this.http.get<AuxiliaireOperation[]>(this.Burl + 'aux/type/' + type);
  }

}
