import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

const exports = [CarouselComponent];

@NgModule({
  declarations: exports,
  imports: [CommonModule],
  exports: exports,
})
export class CarouselModule {}
