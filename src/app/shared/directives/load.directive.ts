import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

type Interval = ReturnType<typeof setInterval>;

@Directive({
  selector: '[load]',
})
export class LoadDirective {
  @Output('load') init: EventEmitter<any> = new EventEmitter();

  constructor(el: ElementRef) {
    const interval: Interval = setInterval(() => {
      if (el.nativeElement) this.init.emit(clearInterval(interval));
    }, 50);
  }
}
