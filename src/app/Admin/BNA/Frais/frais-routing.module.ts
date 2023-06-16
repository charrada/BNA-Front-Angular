import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFraisComponent } from './add-frais/add-frais.component';
import { UpdateFraisComponent } from './update-frais/update-frais.component';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AllFraisComponent },
  { path: 'add', component: AddFraisComponent },
  { path: 'up', component: UpdateFraisComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraisRoutingModule {}
