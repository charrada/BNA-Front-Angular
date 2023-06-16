import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/Services/OperationService/operation.service';
import { operation } from 'app/models/Operation';

@Component({
  selector: 'app-all-frais',
  templateUrl: './all-frais.component.html',
  styleUrls: ['./all-frais.component.scss']
})
export class AllFraisComponent implements OnInit {
  operations: operation[];
  searchId: number;
  p: number = 1; // Page actuelle, initialisée à 1

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
 //   this.findAllOperations();
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

  searchOperationById(): void {
    console.log("searchId:", this.searchId); // Check the value of searchId
    if (this.searchId) {
      this.operationService.findOperationById(this.searchId).subscribe(
        operation => {
          this.operations = [operation];
          console.log(operation); // Check the returned operation
        },
        error => {
          console.error(error);
        }
      );
    } 
  }
}
