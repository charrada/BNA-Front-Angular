import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContratService } from 'app/Services/ContratService/contrat.service';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { Contrat } from 'app/models/Contrat';
import { operation } from 'app/models/Operation';
import { EtatFraisAdminComponent } from '../etat-frais-admin/etat-frais-admin.component';
import { ImageFraisComponent } from 'app/Admin/Frais/image-frais/image-frais.component';
import { Credit } from 'app/models/Credit';
import { DetailsFraisComponent } from 'app/Admin/Frais/details-frais/details-frais.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-frais-admin',
  templateUrl: './all-frais-admin.component.html',
  styleUrls: ['./all-frais-admin.component.scss']
})
export class AllFraisAdminComponent implements OnInit {


  constructor(private cService: ContratService, private _formBuilder:FormBuilder,
    private operationService: OperationService,private router: Router,  
    private dialog: MatDialog,
    private http: HttpClient ,private route: ActivatedRoute// Inject HttpClient here

    ) { }
    loginData: any; // Ajoutez cette ligne pour déclarer la propriété loginData
    
    
    cEncore:number;
    cSucce:number;
    cTot:number=0;
    ngOnInit(): void {

      this.fetchOperations(this.selectedEtat);
      this.countNot();
      this.countOperation("Encore")
.subscribe(
  (count) => {
    this.cEncore = count;
    this.cTot+=count;

    console.log('Count:', this.cEncore);
  },
  (error) => {
    console.error('Error fetching:', error);
  }
  
);
this.countOperation("Succe")
.subscribe(
  (count) => {
    this.cSucce = count;
    this.cTot+=count;

    console.log('Count:', this.cSucce);
  },
  (error) => {
    console.error('Error fetching:', error);
  }
  
);
  
      const loginDataString = localStorage.getItem('loginData');
      if (loginDataString) {
        this.loginData = JSON.parse(loginDataString);
        console.log(this.loginData);
        this.findAccount(this.loginData.username);
        this.getPDP(this.loginData.username);




      } else {
      this.router.navigateByUrl('/Login'); // Rediriger vers la page de login
      }

  
    }
    
    
    

  

  onOptionSelected() {
    this.updateVu();

    this.fetchAllNot();


  }

  operation2: operation; 
  fetchAllNot(): void {
    this.http.get<any>('http://localhost:8083/bna/operation/admin/not/Frais/')
      .subscribe(
        (response) => {
          this.operation2 = response;
          console.log('Result:', this.operation2);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
  }

  updateVu() {
    const vu = 1;
    const url = `http://localhost:8083/bna/operation/admin/update/${vu}`;
  
    this.http.put(url, {}).subscribe(
      () => {
        console.log('Update successful');
        this.nb=0;
      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }

  nb: number; 
  countNot(): void {
    const typeOperation = 'Frais'; // Replace with the actual type operation value
     // Replace with the actual etat operation value
    const vu = 0; // Replace with the desired vu value
  
    this.http.get<number>(`http://localhost:8083/bna/operation/admin/count/${typeOperation}/${vu}`)
      .subscribe(
        (count) => {
          this.nb = count;
          console.log('Count:', this.nb);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
  }
  @Input()ctrct:any;
  contractForm: FormGroup;

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
  
  

    countOperation(type: string): Observable<number> {
      const typeOperation = 'Frais'; // Replace with the actual type operation value
    
      return this.http.get<number>(`http://localhost:8083/bna/operation/count/admin/${typeOperation}/${type}`);
    }
    
    
  
  
  
  
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
  base64Data: any;
  retrieveResonse: any;
  message: string;
  retrievedImage: any; // Declare retrievedImage property
  
  getPDP(username: string) {
    this.http.get('http://localhost:8083/bna/pdp/get/' + username)
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
    
  
  
    login: any; 
  findAccount(username:string): void {
    this.http.get<any>('http://localhost:8083/bna/account/findByUsername/'+username)
      .subscribe(
        (response) => {
          this.login = response;
          console.log('Result:', this.login);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
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
