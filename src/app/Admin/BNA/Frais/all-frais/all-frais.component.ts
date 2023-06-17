import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OperationService } from './../../../../Services/OperationService/operation.service';
import { operation } from 'app/models/Operation';

@Component({
  selector: 'app-all-frais',
  templateUrl: './all-frais.component.html',
  styleUrls: ['./all-frais.component.scss']
})
export class AllFraisComponent implements OnInit {
  operations: operation[];

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.findAllOperations();
  }

  findAllOperations(): void {
    this.operationService.findAllOperation().subscribe(
      operations => {
        this.operations = operations;
        console.log(operations);
      },
      error => {
        console.error(error);
      }
    );
  }

  
}
