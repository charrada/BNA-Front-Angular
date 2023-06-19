import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { AllUniversiteComponent } from './all-universite/all-universite.component';
import {UpdateuniversiteComponent} from './updateuniversite/updateuniversite.component';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { ImageFraisComponent } from './image-frais/image-frais.component';

const routes: Routes = [
  {path:'all', component:AllUniversiteComponent},
  {path:'add', component:AddUniversiteComponent},
  {path:'update/:idUniversite', component:UpdateuniversiteComponent},
  {path:'', component:AllFraisComponent},
  {path:'image', component:ImageFraisComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
