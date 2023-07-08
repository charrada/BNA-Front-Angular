import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfContratsComponent} from "./list-of-contrats/list-of-contrats.component";
import {AddComponent} from "./add/add.component";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import { AllFraisAdminComponent } from './all-frais-admin/all-frais-admin.component';
import { EtatFraisAdminComponent } from './etat-frais-admin/etat-frais-admin.component';

const routes: Routes=[
  {path:"", component:ListOfContratsComponent},
    {path:"addP", component:AddComponent},
    {path:"dialog", component: ConfirmationDialogComponent},
    {path:"f", component: AllFraisAdminComponent},
    {path:"t", component: EtatFraisAdminComponent}

]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ContratRoutingModule { }
