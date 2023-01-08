import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormatFunc } from './Format';
import { Table } from './Table';

type Format = ((val: any) => string) | undefined;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() table: Table<any>;
  @Input() asyncTable: Observable<Table<any>> | undefined;
  private rowWidths: number[] = [];
  @ViewChild('Table') tableRef: ElementRef<HTMLElement>;

  ngOnInit(): void {
    if (this.table) {
      this.presetRowWidths(this.table.columns.length);
      return;
    }
    if (this.asyncTable) {
      this.asyncTable.subscribe((table) => {
        this.table = table;
        this.presetRowWidths(this.table.columns.length);
        // console.log(this.table.columns);
      });
    }
  }

  exists(e: any) {
    console.log(e, !!this.tableRef);
    return !!this.tableRef;
  }

  private presetRowWidths(length: number) {
    this.rowWidths = new Array(length).fill(0);
  }

  setRowWidths() {
    // calculate percentage of each column
    const total = this.rowWidths.reduce((acc, val) => acc + val, 0);

    // set grid template columns
    const percArray = this.rowWidths.map(
      (val) => Math.round((val / total) * 100) + 'fr '
    );
    const colString = percArray.reduce((acc, val) => acc + val, '');

    document.querySelectorAll('tr').forEach((tr) => {
      tr.style.gridTemplateColumns = colString;
    });

    // this.rowWidths.map((val, i) => {
    //   console.log(val, i);
    //   document.querySelectorAll<HTMLElement>('.col-' + i).forEach((col) => {
    //     col.style.width = val + 'px';
    //   });
    // });
  }

  getFormat = (func: Format, value: any, cellIdx: [number, number]) => {
    const [i, j] = cellIdx;
    // format value to preset format if it exists
    const formatValue = func ? func(value) : value;
    let cell = <HTMLElement>document.querySelector(`cell-${i}-${j}`);
    // const valLen = formatValue.toString().length;
    const valLen = cell.clientWidth;

    // set max width of column
    if (valLen > this.rowWidths[i]) this.rowWidths[i] = valLen;
    this.setRowWidths();
    // this.setRowWidths();
    return formatValue;
  };

  format = (funcs: FormatFunc[], value: any) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };
}
