import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContratService } from 'app/Services/ContratService/contrat.service';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { Contrat } from 'app/models/Contrat';
import { operation } from 'app/models/Operation';
import { Router } from '@angular/router';
import { EtatFraisAdminComponent } from '../etat-frais-admin/etat-frais-admin.component';

@Component({
  selector: 'app-all-frais-admin',
  templateUrl: './all-frais-admin.component.html',
  styleUrls: ['./all-frais-admin.component.scss']
})
export class AllFraisAdminComponent implements OnInit {


  ngOnInit(): void {
    this.fetchOperations(this.selectedEtat);
  }


  @Input()ctrct:any;
  contractForm: FormGroup;

  constructor(private cService: ContratService, private _formBuilder:FormBuilder,
    private operationService: OperationService,private router: Router,
    private dialog: MatDialog,
    private http: HttpClient // Inject HttpClient here

    ) { }

    openEtatPopup(operation: operation): void {
      this.dialog.open(EtatFraisAdminComponent, {
        data: { operation: operation }
  
      });

    }
  
    
    
    
    

selectedEtat:string;


  operation: operation; 
  fetchOperations(Etat:string): void {
    this.http.get<any>('http://localhost:8083/bna/operation/admin/Frais/'+Etat)
      .subscribe(
        (response) => {
          this.operation = response;
          console.log('Result:', this.operation);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
  }
}
