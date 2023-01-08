import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DirectivesModule } from '../shared/directives/directives.module';

const exports = [TableComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule, DirectivesModule],
  exports: exports,
})
export class TableModule {}
