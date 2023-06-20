import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteRoutingModule } from './frais-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllFraisComponent } from './all-frais/all-frais.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddFraisComponent } from './add-frais/add-frais.component';
import { ReclaimRoutingModule } from '../Reclaim/reclaim-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { AdminLayoutModule } from 'app/layouts/admin-layout/admin-layout.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageFraisComponent } from './image-frais/image-frais.component';

@NgModule({
  declarations: [
    AllFraisComponent,
    AddFraisComponent,
    ImageFraisComponent,
    
  ],
  imports: [    FormsModule, ReactiveFormsModule,
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,NgxPaginationModule,
    ReclaimRoutingModule, CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    AdminLayoutModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatButtonModule

  ]
})
export class UniversiteModule { }
