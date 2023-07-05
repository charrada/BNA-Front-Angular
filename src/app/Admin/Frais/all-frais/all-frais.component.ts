import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { operation } from 'app/models/Operation';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddFraisComponent } from '../add-frais/add-frais.component';
import { AddReclaimComponent } from 'app/Admin/Reclaim/add-reclaim/add-reclaim.component';
import { Credit } from 'app/models/Debiteur';
import { HttpClient } from '@angular/common/http';
import { ImageFraisComponent } from '../image-frais/image-frais.component';

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
    private http: HttpClient // Inject HttpClient here
  ) {}


  ngOnInit(): void {
 //   this.findAllOperations();
 
  }

  findAllOperations(): void {
    this.operationService.findAllOperation().subscribe(
      operations => {
        this.operations = operations;
        console.log(operations);
      },
      error => {
        console.error(error);
      }
    );
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



  openImagePopup(idOperation: number): void {
    this.dialog.open(ImageFraisComponent, {
      data: {
        idOperation: idOperation
      }
    });
  }


}



