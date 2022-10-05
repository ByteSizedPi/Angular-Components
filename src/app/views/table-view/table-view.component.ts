import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Table, toCurrency, UserTable } from '../../table/Table';

interface User {
  username: string;
  password: string;
  age: number;
}

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  // table: UserTable;
  asyncTable: Observable<UserTable>;

  constructor() {
    let table: UserTable = new UserTable([
      {
        username: 'Johan',
        password: 'johan',
        age: 22,
      },
      {
        username: 'Pieter',
        password: 'Pieter',
        age: 20,
      },
      {
        username: 's',
        password: 's',
        age: 22,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
      {
        username: 'hackerman',
        password: 'hackerman05',
        age: 50,
      },
    ]);

    this.asyncTable = of(table).pipe(delay(1000));
  }

  ngOnInit(): void {}
}
