import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconModule } from '../icons/icon.module';
import { IconButtonDirective } from './icon-button.directive';
import { ButtonDirective } from './button.directive';

const exports = [ButtonComponent];

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [ButtonComponent, IconButtonDirective, ButtonDirective],
  exports: [ButtonComponent, IconButtonDirective, ButtonDirective],
})
export class ButtonModule {}
