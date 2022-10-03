import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { TableComponent } from './table/table/table.component';
import { ColorPickerViewComponent } from './views/color-picker-view/color-picker-view.component';
import { ModalViewComponent } from './views/modal-view/modal-view.component';

const routes: Routes = [
  {
    path: 'colorpicker',
    component: ColorPickerViewComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
  {
    path: 'modal',
    component: ModalViewComponent,
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
