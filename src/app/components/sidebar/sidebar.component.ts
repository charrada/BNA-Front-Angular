import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: "/Frais", title: "Frais", icon: "attach_money", class: "" },
    { path: "/Admin", title: "Admin", icon: "person", class: "" },



    

 /* { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },


  { path: "/user-profile", title: "User Profile", icon: "person", class: "" },
  { path: "/Equipes", title: "Gerer Equipes", icon: "groups", class: "" },



  { path: "/Departement", title: "Gerer Departement", icon: "apartment", class: "" },

  { path: "/Projets", title: "Projets", icon: "table_view", class: "" },

  { path: "/Contrat", title: "Contrat", icon: "wysiwyg", class: "" },

  { path: "/Reclamation", title: "Reclamation", icon: "sms_failed", class: "" },

  { path: "/Projets", title: "Projets", icon: "table_view", class: "" },

  {
    path: "/table-list",
    title: "Table List",
    icon: "content_paste",
    class: "",
  },
  { path: "/Forum/all", title: "Forum", icon: "groups", class: "" },*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router,private http: HttpClient) {}


  ngOnInit() {

    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      this.loginData = JSON.parse(loginDataString);
      console.log(this.loginData);
      // Utilisez les données de connexion comme vous le souhaitez
this.findAccount(this.loginData.username);
      this.menuItems = ROUTES.filter((menuItem) => menuItem);
    } else {
    this.router.navigateByUrl('/Login'); // Rediriger vers la page de login
    }

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

 

  loginData:any;
  logout(): void {
    localStorage.removeItem('loginData');
    this.loginData = null;
    this.router.navigateByUrl('/Login');
  }


  login: any; 
  findAccount(username:string): void {
    this.http.get<any>('http://localhost:8083/bna/account/findByUsername/'+username)
      .subscribe(
        (response) => {
          this.login = response;
          console.log('Result:', this.login);
        },
        (error) => {
          console.error('Error fetching:', error);
        }
      );
  }

}
