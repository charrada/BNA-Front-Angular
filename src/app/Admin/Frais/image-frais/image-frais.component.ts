import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { operation } from 'app/models/Operation';
import axios from 'axios';

@Component({
  selector: 'app-image-frais',
  templateUrl: './image-frais.component.html',
  styleUrls: ['./image-frais.component.scss']
})
export class ImageFraisComponent implements OnInit {
  operation: operation;
  retrievedImage: string | undefined;
  detectedText: string ;

  constructor(
    public dialogRef: MatDialogRef<ImageFraisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private http: HttpClient // Inject HttpClient here
  ) {
    this.operation = data.operation;
  }

  ngOnInit(): void {
    this.getImage(this.operation.idOperation);
    this.getTextContent(this.operation.idOperation); // Call the function to fetch the text content

  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  fileContent: string | undefined; // Variable to store the text content

  getTextContent(idOp: number) {
    // Make a request to Spring Boot to get the text content of the file.
    this.http.get('http://localhost:8083/bna/image/getT/' + idOp, { responseType: 'text' })
      .subscribe(
        content => {
          this.fileContent = content;
        },
        error => {
          console.error('Error fetching text content:', error);
        }
      );
  }


  selectedFile: File;
  base64Data: any;
  retrieveResonse: any;
  message: string;

  getImage(idOp: number) {
    this.http.get('http://localhost:8083/bna/image/get/' + idOp)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  
          // Send the image to the text recognition API
          this.performTextRecognition(this.retrievedImage);
        }
      );
  }
  
  performTextRecognition(imageUrl: string) {
    // Replace '' with your actual API key
    const apiKey = 'C:/Users/user/Desktop/BNA PROJECT/BNA-Front-Angular/src/app/Admin/Frais/image-frais/sec.json';
    const apiUrl = 'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey;
  
    const requestData = {
      requests: [
        {
          image: {
            content: imageUrl.split(',')[1] // Extract base64 image data
          },
          features: [
            {
              type: 'TEXT_DETECTION'
            }
          ]
        }
      ]
    };
  
    // Make a POST request to the text recognition API
    axios.post(apiUrl, requestData)
      .then(response => {
        const textAnnotations = response.data.responses[0].textAnnotations;
        if (textAnnotations && textAnnotations.length > 0) {
          const detectedText = textAnnotations[0].description;
          console.log('Detected Text:', detectedText);
          // Do further processing with the detected text
        }
      })
      .catch(error => {
        console.error('Text recognition error:', error);
      });
  }
}
