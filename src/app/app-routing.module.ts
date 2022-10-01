import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { TableComponent } from './table/table/table.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

const routes: Routes = [
  {
    path: 'colorpicker',
    component: ColorPickerComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
