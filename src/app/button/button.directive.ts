import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[button]',
})
export class ButtonDirective implements OnInit, OnChanges {
  hover: boolean = false;
  @Input('active') active: boolean = false;
  s: CSSStyleDeclaration;

  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.s = this.el.nativeElement.style;
  }

  ngOnInit(): void {
    this.s.boxSizing = 'border-box';
    this.s.backgroundColor = `var(--bg-${this.active ? '2' : '1'})`;
    this.s.border = 'none';
    this.s.margin = '0.125rem 0.25rem';
    this.s.borderRadius = 'var(--rm)';
    this.s.padding = '0.5rem';
    this.s.transition = 'background-color 0.1s';
    this.s.color = 'white';
    this.s.cursor = 'pointer';
    this.s.fontSize = '1rem';
    this.el.nativeElement.classList.add('row', 'center-vertical');
    this.s.columnGap = '0.5rem';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.hover) {
      this.s.backgroundColor = 'var(--bg-3)';
      return;
    }
    this.s.backgroundColor = `var(--bg-${this.active ? '2' : '1'})`;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover = true;
    this.s.backgroundColor = 'var(--bg-3)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover = false;
    this.s.backgroundColor = `var(--bg-${this.active ? '2' : '1'})`;
  }

  @HostListener('mousedown') onMouseDown() {
    this.s.backgroundColor = 'var(--bg-2)';
  }

  @HostListener('mouseup') onMouseUp() {
    this.s.backgroundColor = 'var(--bg-3)';
  }
}
