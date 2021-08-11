import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

// table fake data source
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Baabte', name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: 'Cybersquare', name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: 'Adidas', name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: 'Nike', name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: 'Puma', name: 'calicut', weight: 'kiransurya032@gmail.com', symbol: '8606326406'},
  {position: "USP", name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: "OPPO", name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: "Samsung", name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: "One Plus", name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
  {position: 'Apple', name: 'calicut', weight: 'suryakiran@baabte.com', symbol: '8606326406'},
];  
// End table fake datasource

@Component({
  selector: 'app-approve-resellers',
  templateUrl: './approve-resellers.component.html',
  styleUrls: ['./approve-resellers.component.css']
})
export class ApproveResellersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Reseller Name', 'Address', 'Email', 'Mobile',  'bank', 'operations'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
