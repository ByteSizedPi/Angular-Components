import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icons/icon.module';
import { ButtonModule } from '../button/button.module';

const exports = [ColorPickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule],
  declarations: [ColorPickerComponent],
  exports: exports,
  bootstrap: [ColorPickerComponent],
})
export class ColorPickerModule {}
