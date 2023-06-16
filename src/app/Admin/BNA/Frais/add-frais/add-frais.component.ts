import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-frais',
  templateUrl: './add-frais.component.html',
  styleUrls: ['./add-frais.component.scss']
})
export class AddFraisComponent implements OnInit {
  dataSource: MatTableDataSource<any>; // Define the data source property

  constructor() { }

  ngOnInit(): void {
    // Initialize the data source with your data
    const data = [/* Your data array */];
    this.dataSource = new MatTableDataSource(data);
  }
}
