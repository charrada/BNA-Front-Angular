import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { ImageFraisComponent } from './image-frais/image-frais.component';

const routes: Routes = [
  {path:'', component:AllFraisComponent},
  {path:'image', component:ImageFraisComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FraisRoutingModule { }
