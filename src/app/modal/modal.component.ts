import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('bg') bg: ElementRef<HTMLElement>;
  @ViewChild('modal') modal: ElementRef<HTMLElement>;

  bgStyle: CSSStyleDeclaration;
  modalStyle: CSSStyleDeclaration;

  ngAfterViewInit(): void {
    this.bgStyle = this.bg.nativeElement.style;
    this.modalStyle = this.modal.nativeElement.style;
  }

  closeModal(target: any) {
    if (!target.classList.contains('modal-background')) return;
    this.modalStyle.animation = 'slide-out forwards 0.2s ease-in-out';
    this.bgStyle.animation = 'fade-out forwards 0.3s ease-in';
  }

  openModal() {
    this.modalStyle.animation = 'slide-in forwards 0.2s 0.1s';
    this.bgStyle.animation = 'fade-in 0.3s forwards ease-in';
  }
}
