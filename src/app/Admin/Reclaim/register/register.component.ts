import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationData = {
    nom: '',
    prenom: '',
    typeAccount: '',
    username: '',
    email: '',
    password: '',
    dateCreation: new Date(),
  };
  ngOnInit() {
  }


  constructor(private http: HttpClient, private router: Router) {}
  register(): void {

    const url = 'http://localhost:8083/bna/account/register';
  
    this.http.post<any>(url, this.registrationData).subscribe(
      (response: any) => {


        this.onUpload(this.registrationData.username);
        this.router.navigate(['/Login']);


        // Optionally, perform any additional actions after successful registration
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle the error or display an appropriate error message
      }
    );
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





  
  // Function to handle the image upload
  onUpload(username: string) {
    if (this.selectedFile) { // Check if selectedFile is defined
      console.log(this.selectedFile);
    
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
      // Set the idAccount value in the FormData object if Id is not null or undefined
      if (username !== null && username !== undefined) {
        uploadImageData.append('username', username.toString());
      }
    
      this.http
        .post('http://localhost:8083/bna/pdp/upload', uploadImageData, { observe: 'response' })
        .subscribe(
          (response: any) => {
            console.log(response); // Log the entire response object to check for status codes and error messages
            if (response.status === 200) {
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';
            }
          },
          (error) => {
            console.error('Error uploading image:', error);
          }
        );
    } else {
      console.error('No file selected.');
    }
  }
  


}
