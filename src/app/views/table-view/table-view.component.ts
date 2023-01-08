import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User, UserData } from 'src/app/table/tempData';
import { Table } from '../../table/Table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  asyncTable?: Observable<Table<User>>;
  table?: Table<User>;

  constructor() {
    let table: Table<User> = new Table<User>(
      UserData,
      // new Array<User>(500).fill(UserData[0]),
      [
        {
          key: 'username',
          justify: 'CENTER',
          align: 'LEFT',
        },
        {
          key: 'password',
          justify: 'CENTER',
          // align: 'CENTER',
        },
        {
          key: 'age',
          formatOptions: ['currency'],
          classList: ['green'],
          justify: 'RIGHT',
          // align: 'RIGHT',
        },
      ]
    );

    this.asyncTable = of(table).pipe(delay(10));
  }

  ngOnInit(): void {}
}
