import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldepartementComponent } from './alldepartement/alldepartement.component';
import {UpdatedepartementComponent} from './updatedepartement/updatedepartement.component';
import {AddDepartementComponent} from './add-departement/add-departement.component';

const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
