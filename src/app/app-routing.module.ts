import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ColorPickerViewComponent } from './views/color-picker-view/color-picker-view.component';
import { ModalViewComponent } from './views/modal-view/modal-view.component';
import { TableViewComponent } from './views/table-view/table-view.component';

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
    component: TableViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
