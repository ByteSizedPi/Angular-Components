import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

const exports = [ButtonComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  bootstrap: [ButtonComponent],
})
export class ButtonModule {}
