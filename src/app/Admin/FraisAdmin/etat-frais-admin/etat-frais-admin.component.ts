import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailsFraisComponent } from 'app/Admin/Frais/details-frais/details-frais.component';
import { operation } from 'app/models/Operation';

@Component({
  selector: 'app-etat-frais-admin',
  templateUrl: './etat-frais-admin.component.html',
  styleUrls: ['./etat-frais-admin.component.scss']
})
export class EtatFraisAdminComponent implements OnInit {

  operation: operation;
  selectedEtat: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,    private dialog: MatDialog,
    public dialogRef: MatDialogRef<EtatFraisAdminComponent>
  ) {
    this.operation = data.operation;
  }

  ngOnInit(): void {
  }


  addMontant(m:number): void {
    this.http.put<operation>('http://localhost:8083/bna/credit/addMontant/' + this.operation.credit.idCredit + '/' + m, {

    
    })
      .subscribe(
        (response) => {
          // Handle the successful response here
          console.log('Operation updated successfully:', response);
          this.closeDialog();
          // You can perform any additional actions after the update if needed
        },
        (error) => {
          // Handle the error here
          console.error('Error updating operation:', error);
          // You can display an error message or perform other actions based on the error
        }
      );
  }
  reduceMontant(m:number): void {
    this.http.put<operation>('http://localhost:8083/bna/credit/reduceMontant/' + this.operation.credit.idCredit + '/' + m, {

    
    })
      .subscribe(
        (response) => {
          // Handle the successful response here
          console.log('Operation updated successfully:', response);
          this.closeDialog();
          // You can perform any additional actions after the update if needed
        },
        (error) => {
          // Handle the error here
          console.error('Error updating operation:', error);
          // You can display an error message or perform other actions based on the error
        }
      );
  }

  openDetailsPopup(operation: operation): void {
    this.dialog.open(DetailsFraisComponent, {
      data: { operation: operation }
    });
  }


  updateEtat(): void {
    if(this.selectedEtat!==this.operation.etatOperation)
    {
    this.http.put<operation>('http://localhost:8083/bna/operation/changeEtat/' + this.operation.idOperation + '/' + this.selectedEtat, {

    
    })
      .subscribe(
        (response) => {
          // Handle the successful response here
          console.log('Operation updated successfully:', response);
          if(this.selectedEtat=="succe")
          {
            this.addMontant(this.operation.montant);
          }else{
            this.reduceMontant(this.operation.montant);
          }

          this.closeDialog();
          // You can perform any additional actions after the update if needed
        },
        (error) => {
          // Handle the error here
          console.error('Error updating operation:', error);
          // You can display an error message or perform other actions based on the error
        }
      );
    }
 

  }
  

  closeDialog(): void {
    this.dialogRef.close();
  }



}
