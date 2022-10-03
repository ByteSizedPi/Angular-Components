import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss'],
})
export class ModalViewComponent implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modal.openModal();
  }
}
