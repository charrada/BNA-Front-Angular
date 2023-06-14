import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { operation } from 'app/models/Operation';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  operation:operation[]=[];
  url=environment.baseUrl+'operation/';

  constructor(private http: HttpClient) { }

  /********************************Add Contrat************************************/
  public addOperation(op: operation):Observable<operation>{
    return this.http.post<operation>(this.url +'addOperation', op);
  }



  public findAllOperation(): Observable<operation> {
    return this.http.get<operation>(this.url);
   
  }










}
