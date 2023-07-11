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
import { ImageFraisComponent } from 'app/Admin/Frais/image-frais/image-frais.component';
import { Credit } from 'app/models/Credit';
import { DetailsFraisComponent } from 'app/Admin/Frais/details-frais/details-frais.component';

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
  
    
    
    operations: operation[];
    creditId: number;
    searchId: number;
    credits: Credit[]; // Add the credits property
  
    p: number = 1; // Page actuelle, initialisée à 1
  
  


  
  
  
  
  
    //recherche des frais
  searchOperationById(creditId: number): void {
    this.operations = []; // Reset operations array
  
    this.creditId = creditId;
  
    if (creditId) {
      this.operationService.findOperationsByCreditId(creditId).subscribe(
        operations => {
          if (operations.length) {
            
  //nafs esm bd !!?? pourle filtre
            // Filter operations by TypeOperation equal to "frais"
            this.operations = operations.filter(operation => operation.typeOperation === "Frais");
            
            console.log(this.operations); // Check the filtered operations
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  
  
  
  }
  
  
    
    selectedFile: File;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: string;
  
       //Gets called when the user clicks on retieve image button to get the image from back end
       getImage(idOp :number) {
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.http.get('http://localhost:8083/bna/image/get/' +idOp)
          .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            }
          );
      }
  
      
   
    NomPren:string;
    //recherche des credit avec debiteur id
    searchCreditByDebId(): void {
      this.searchOperationById(null);
      console.log("searchId:", this.searchId); // Check the value of searchId2
      if (this.searchId) {
        this.operationService.findCreditByDebiteurId(this.searchId).subscribe(
          credits => {
            this.credits = credits;
            console.log(credits); // Check the returned credits
          },
          error => {
            console.error(error);
          }
        );
      }
  
    }
    
  
  
  
  
  
  

  
  
    openImagePopup(operation: operation): void {
      this.dialog.open(ImageFraisComponent, {
        data: { operation: operation }
  
      });
    }
  
  
    openDetailsPopup(operation: operation): void {
      this.dialog.open(DetailsFraisComponent, {
        data: { operation: operation }
      });
    }
    
    exportDataToPDF(id: number) {
      this.http.get('http://localhost:8083/bna/pdf/'+id, { responseType: 'arraybuffer' })
        .subscribe((response: ArrayBuffer) => {
          const blob = new Blob([response], { type: 'application/pdf' });
    
          // Create a download link
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'data.pdf';
          link.click();
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
