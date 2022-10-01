import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

const exports = [TableComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule],
  exports: exports,
})
export class TableModule {}
