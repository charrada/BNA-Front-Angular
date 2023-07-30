import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { operation } from 'app/models/Operation';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddFraisComponent } from '../add-frais/add-frais.component';
import { AddReclaimComponent } from 'app/Admin/Reclaim/add-reclaim/add-reclaim.component';
import { Credit } from 'app/models/Credit';
import { HttpClient } from '@angular/common/http';
import { ImageFraisComponent } from '../image-frais/image-frais.component';
import { DetailsFraisComponent } from '../details-frais/details-frais.component';

@Component({
  selector: 'app-all-frais',
  templateUrl: './all-frais.component.html',
  styleUrls: ['./all-frais.component.scss']
})
export class AllFraisComponent implements OnInit {
  operations: operation[];
  creditId: number;
  searchId: number;
  credits: Credit[]; // Add the credits property

  p: number = 1; // Page actuelle, initialisée à 1


  constructor(
    private operationService: OperationService,
    private dialog: MatDialog,
    private http: HttpClient,private router: Router // Inject HttpClient here
  ) {}


  loginData: any; // Ajoutez cette ligne pour déclarer la propriété loginData

  ngOnInit(): void {
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      this.loginData = JSON.parse(loginDataString);
      console.log(this.loginData);
      this.getPDP(this.loginData.username);
    } else {
      this.router.navigateByUrl('/Login'); // Rediriger vers la page de login
    }
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
  






  fileNameDialogRef: MatDialogRef<AddFraisComponent>;
  openAjout(creditId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '25%';
    dialogConfig.data = { creditId }; // Pass the creditId as data to the dialog
    this.fileNameDialogRef = this.dialog.open(AddFraisComponent, dialogConfig);
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
  





}



