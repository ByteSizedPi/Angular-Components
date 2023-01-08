import { NgModule } from '@angular/core';
import { LoadDirective } from './load.directive';

const exports = [LoadDirective];

@NgModule({
  declarations: exports,
  imports: [],
  exports: exports,
})
export class DirectivesModule {}
