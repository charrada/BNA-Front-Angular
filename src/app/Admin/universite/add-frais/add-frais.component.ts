import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { operation } from 'app/models/Operation';
import { TypePaiementOperation } from 'app/models/TypePaiementOperation';
import { OperationService } from 'app/Services/OperationService/operation.service';

@Component({
  selector: 'app-add-frais',
  templateUrl: './add-frais.component.html',
  styleUrls: ['./add-frais.component.scss']
})
export class AddFraisComponent implements OnInit {
  creditId: number;
  operation: operation = {
    idOperation: null,
    montant: 0,
    idAgent: 0,
    description: '',
    dateF: new Date(),
    credit: { idCredit: 0 }
    ,imageUrl:null,
    typePaiementOperation:{ 
       idType:0,
      nomType:''}

  };



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddFraisComponent>,
    private operationService: OperationService,
    private http: HttpClient // Add this line
  ) {
    console.log(data.creditId);
    this.creditId = data.creditId;
    this.operation.credit.idCredit = this.creditId;
  }

  typePaiementOperations: TypePaiementOperation[] = [];


  ngOnInit(): void {


    this.operationService.findAllTypePaiementOperation().subscribe(
      (typePaiementOperations) => {
        this.typePaiementOperations = typePaiementOperations;
        console.log('Type paiement operations:', typePaiementOperations);
      },
      (error) => {
        // Handle the error
        console.error('Error fetching type paiement operations:', error);
      }
    );
    
  }

  addOperation(): void {
    // Call the addOperation method of the OperationService
    this.operationService.addOperation(this.operation).subscribe(
      (response) => {
        if(this.selectedOption=="chéque")
        {        this.onUpload(response.idOperation); //l apload 

        }
        
        console.log('Operation added:', response);
        //houni bch naaml update fl upload! nhot feha id_operation
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






  selectedOption: string;

  onSelectionChange(option: string) {
    this.selectedOption = option;
  }
  





  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload(Id: number) {
    console.log(this.selectedFile);
  
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    // Set the idOperation value in the FormData object

    uploadImageData.append('idOperation', Id.toString() );
  
    this.http.post('http://localhost:8083/bna/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }
  

 


}
