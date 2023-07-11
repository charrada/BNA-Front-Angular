import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { EquipeService } from './Services/ServicesEquipes/equipe.service';
import { ProjetService } from './Services/ProjetService/projet.service';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EquipesComponent } from './Admin/equipes/equipes.component';
import { ConfirmDialogComponent } from './Admin/EquipesManagment/confirm-dialog/confirm-dialog.component';
import { CreateThreadComponent } from './Admin/Forum/Thread/create-thread/create-thread.component';
import { UpdateThreadComponent } from './Admin/Forum/Thread/update-thread/update-thread.component';
import { ListThreadComponent } from './Admin/Forum/Thread/list-thread/list-thread.component';
import { DetailsThreadComponent } from './Admin/Forum/Thread/details-thread/details-thread.component';
import { ListReponseComponent } from './Admin/Forum/Reponse/list-reponse/list-reponse.component';
import { CreateReponseComponent } from './Admin/Forum/Reponse/create-reponse/create-reponse.component';
import { ForumComponent } from './Admin/Forum/forum/forum.component';
import { CreateEquipeComponent } from './Admin/EquipesManagment/createEquipe/create-equipe/create-equipe.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { TachesFrontComponent } from './taches-front/taches-front.component';

import { FraisModule } from './Admin/Frais/frais.module';
import { DepartementModule } from './Admin/departement/departement.module';
import { ContratModule } from './Admin/FraisAdmin/contrat.module';
import { ReclaimModule } from './Admin/Reclaim/reclaim.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EquipesComponent,
    ConfirmDialogComponent,
    CreateThreadComponent,
    UpdateThreadComponent,
    ListThreadComponent,
    DetailsThreadComponent,
    ListReponseComponent,
    CreateReponseComponent,
    ForumComponent,
    NotFoundComponent,
    TachesFrontComponent
  ],
  providers: [EquipeService, ProjetService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatChipsModule,
    NgbModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    DragDropModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    AdminLayoutModule,
    FraisModule,
    DepartementModule,
    ContratModule,
    ReclaimModule
  ]
})
export class AppModule {}
