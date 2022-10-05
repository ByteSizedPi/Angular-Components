import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icons/icon.module';
import { ButtonDirective } from './button.directive';

const exports = [];

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class ButtonModule {}
