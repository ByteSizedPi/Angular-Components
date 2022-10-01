import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

const exports = [IconComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule],
  exports: exports,
})
export class IconModule {}
