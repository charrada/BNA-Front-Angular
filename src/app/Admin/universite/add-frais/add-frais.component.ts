import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Credit } from 'app/models/Credit';
import { operation } from 'app/models/Operation';
import { OperationService } from 'app/Services/OperationService/operation.service';

@Component({
  selector: 'app-add-frais',
  templateUrl: './add-frais.component.html',
  styleUrls: ['./add-frais.component.scss']
})
export class AddFraisComponent implements OnInit {
  creditId: number;
  operation: operation = {
    idFrais: null,
    montant: 0,
    idAgent: 0,
    description: '',
    dateF: new Date(),
    credit: { idCredit: 0 }
    ,imageUrl:null
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddFraisComponent>,
    private operationService: OperationService
  ) {
    console.log(data.creditId); // Access the creditId here
    this.creditId = data.creditId;
    this.operation.credit.idCredit = this.creditId;
  }

  ngOnInit(): void {}

  addOperation(): void {
    // Call the addOperation method of the OperationService
    this.operationService.addOperation(this.operation).subscribe(
      (response) => {
        // Operation added successfully
        console.log('Operation added:', response);
        this.dialogRef.close();
      },
      (error) => {
        // Handle the error
        console.error('Error adding operation:', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
