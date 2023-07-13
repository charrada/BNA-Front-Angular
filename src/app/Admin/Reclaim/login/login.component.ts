import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const loginData = {
      username: this.username,
      password: this.password
    };


    
      this.http.post<any>('http://localhost:8083/bna/account/login', loginData).subscribe(
        (response) => {
          this.router.navigate(['/Frais']);

          console.log('Login successful!');
          // Handle successful login
        },
        (error) => {
          console.log(error);
          console.log('Invalid username or password.');
          // Handle login error
        }
      );
    }
    
}
