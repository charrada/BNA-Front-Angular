import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuxiliaireOperation } from 'app/models/AuxiliaireOperation';
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
    montant: null,
    idAgent: null,
    dateF: new Date(),
    credit: { idCredit: 0,montant:0,
    debiteur:{idDebiteur:0,nom:null,prenom:null,} },
    imageUrl: null,
    etatOperation:"Encore",
    typePaiementOperation: { 
      idType: null,
      nomType: ''
    },
    numC: null,
    ribV: null,
    typeOperation: "Frais",
    detailsOperation: { 
      idDetails:null,
      typeDetails:null,
      numPieceEnregistrement:null,
      typePieceEnregistrement:null,
      typeTimbrage:null,
      numAffaireAuxiliaire:null,
          idAuxOperation:null,

    },
  };



  isFieldInvalid(fieldName: string): boolean {
    const field = this.operation[fieldName];
    return field === null || field === undefined || field === '';
  }
 typeP: String ;
  //ajouter tous les controle
  isFormValid(): boolean {
    if(this.typeP=="Espece"){
        return (
    
      this.isFieldInvalid('numC') ||
      this.isFieldInvalid('ribV') 
    );

    }

    return (
      !this.isFieldInvalid('montant') &&
      !this.isFieldInvalid('idAgent') 
      
    );
  }
  

  selectedType: string;

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
        this.operation.idOperation = response.idOperation; // Set the idOperation value
        if (this.operation.typePaiementOperation.idType === 1) {
          this.onUpload(response.idOperation); // Upload the image
        }
        console.log('Operation added:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding operation:', error);
      }
    );
  }
  


  



  closeDialog(): void {
    this.dialogRef.close();
  }

  selectedOption: number;

  onSelectionChange(option: number) {
    this.selectedOption = option;
  }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  // Gets called when the user selects an image
  public onFileChanged(event) {
    // Select File
    this.selectedFile = event.target.files[0];
  }




  // Gets called when the user clicks on submit to upload the image
  onUpload(Id: number) {
    console.log(this.selectedFile);
  
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    // Set the idOperation value in the FormData object
    uploadImageData.append('idOperation', Id.toString());
  
    this.http.post('http://localhost:8083/bna/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }
  

 //-------------------

 
 typeAux(selectedTypeAux:string){

  this.fetchTypeAux(selectedTypeAux);
}


  tAuxs: any[]; 
  fetchTypeAux(type:string): void {
    this.http.get<AuxiliaireOperation[]>('http://localhost:8083/bna/aux/type/'+type)
      .subscribe(
        (response) => {
          this.tAuxs = response;
          console.log('Types:', this.tAuxs);
        },
        (error) => {
          console.error('Error fetching Types:', error);
        }
      );
  }
  //----------------------


}







