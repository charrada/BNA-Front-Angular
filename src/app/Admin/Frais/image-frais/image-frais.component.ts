import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-frais',
  templateUrl: './image-frais.component.html',
  styleUrls: ['./image-frais.component.scss']
})
export class ImageFraisComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ImageFraisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private http: HttpClient // Inject HttpClient here
  ) {
    this.OperationId = data.idOperation;
  }

  OperationId: number;

  ngOnInit(): void {
    this.getImage(this.OperationId);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  selectedFile: File;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  retrievedImage: string | undefined;


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
  }
