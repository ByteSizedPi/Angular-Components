import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../icons/icon.module';

const exports = [ColorPickerComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IconModule],
  exports: exports,
})
export class ColorPickerModule {}
