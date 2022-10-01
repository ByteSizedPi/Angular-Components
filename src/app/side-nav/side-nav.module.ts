import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';

const exports = [SideNavComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule],
  exports: exports,
})
export class SideNavModule {}
