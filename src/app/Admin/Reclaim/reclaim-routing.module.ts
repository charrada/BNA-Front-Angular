import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfReclaimsComponent} from "./list-of-reclaims/list-of-reclaims.component";
import {AddReclaimComponent} from "./add-reclaim/add-reclaim.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes=[
  {path:'',component:ListOfReclaimsComponent},
  {path:'addR', component:AddReclaimComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent}


    ]

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclaimRoutingModule { }
