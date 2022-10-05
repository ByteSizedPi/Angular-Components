import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from './Table';

type Format = ((val: any) => string) | undefined;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() table: Table<any>;
  @Input() asyncTable: Observable<Table<any>>;

  ngOnInit(): void {
    if (this.table) return;
    if (this.asyncTable) {
      this.asyncTable.subscribe((table) => (this.table = table));
    }
  }

  getFormat = (func: Format, value: any) => (func ? func(value) : value);
}
