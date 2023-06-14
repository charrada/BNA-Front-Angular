import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddFraisComponent} from "./add-frais/add-frais.component";

const routes: Routes=[

  {path:"", component:AddFraisComponent},


]

@NgModule({
  imports: [

      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class FraisRoutingModule { }
