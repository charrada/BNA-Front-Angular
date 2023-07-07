import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuxiliaireOperation } from 'app/models/AuxiliaireOperation';
import { operation } from 'app/models/Operation';

@Component({
  selector: 'app-details-frais',
  templateUrl: './details-frais.component.html',
  styleUrls: ['./details-frais.component.scss']
})
export class DetailsFraisComponent implements OnInit {
  operation: operation;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient ,

    public dialogRef: MatDialogRef<DetailsFraisComponent>
  ) {
    this.operation = data.operation;
  }

  ngOnInit(): void {
    console.log(this.operation); // Use the 'operation' variable in your component
if(this.operation.detailsOperation.typeDetails=="Auxiliaire" )
{
  this.fetchAux(this.operation.detailsOperation.idAuxOperation)
}
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  auxs: any[]; 
  fetchAux(id:number): void {
    this.http.get<AuxiliaireOperation[]>('http://localhost:8083/bna/aux/'+id)
      .subscribe(
        (response) => {
          this.auxs = response;
          console.log('Result:', this.auxs);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
  }


}
