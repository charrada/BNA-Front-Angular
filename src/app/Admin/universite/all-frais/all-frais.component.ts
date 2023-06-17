import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { operation } from 'app/models/Operation';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddFraisComponent } from '../add-frais/add-frais.component';
import { AddReclaimComponent } from 'app/Admin/Reclaim/add-reclaim/add-reclaim.component';
import { Credit } from 'app/models/Credit';

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

  constructor(private operationService: OperationService,private dialog: MatDialog) { }



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
this.creditId=creditId;
    if (creditId) {
      this.operationService.findOperationsByCreditId(creditId).subscribe(
        operations => {
          this.operations = operations;
          console.log(operations); // Check the returned operations
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  

  //recherche des credit avec debiteur id
  searchCreditByDebId(): void {
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
  


  copyToClipboard(content: string): void {
    navigator.clipboard.writeText(content)
      .then(() => {
        console.log('Content copied to clipboard:', content);
      })
      .catch((error) => {
        console.error('Failed to copy content to clipboard:', error);
      });
  }
  





  fileNameDialogRef: MatDialogRef<AddFraisComponent>;
  openAjout(creditId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '25%';
    dialogConfig.data = { creditId }; // Pass the creditId as data to the dialog
    this.fileNameDialogRef = this.dialog.open(AddFraisComponent, dialogConfig);
  }





}
