import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavModule } from './side-nav/side-nav.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from './icons/icon.module';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { ModalModule } from './modal/modal.module';

import { ColorPickerViewComponent } from './views/color-picker-view/color-picker-view.component';
import { ModalViewComponent } from './views/modal-view/modal-view.component';

@NgModule({
  declarations: [AppComponent, ColorPickerViewComponent, ModalViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavModule,
    CarouselModule,
    ButtonModule,
    CommonModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
