import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('bg') bg: ElementRef<HTMLElement>;
  @ViewChild('modal') modal: ElementRef<HTMLElement>;

  @Output() open: EventEmitter<boolean> = new EventEmitter();
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  bgStyle: CSSStyleDeclaration;
  modalStyle: CSSStyleDeclaration;

  ngAfterViewInit(): void {
    this.bgStyle = this.bg.nativeElement.style;
    this.modalStyle = this.modal.nativeElement.style;
  }

  closeModal(target: any = undefined) {
    if (target && !target.classList.contains('modal-background')) return;

    this.close.emit(true);

    this.modalStyle.animation = 'slide-out forwards 0.2s ease-in-out';
    this.bgStyle.animation = 'fade-out forwards 0.3s ease-in';
  }

  openModal() {
    this.open.emit(true);
    this.modalStyle.animation = 'slide-in forwards 0.2s 0.1s';
    this.bgStyle.animation = 'fade-in 0.3s forwards ease-in';
  }
}
