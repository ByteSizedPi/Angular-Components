import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[icon-btn]',
})
export class IconButtonDirective implements OnInit {
  @Input('icon-btn') icon: string;
  s: CSSStyleDeclaration;
  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.s = this.el.nativeElement.style;
  }

  ngOnInit(): void {
    this.s.boxSizing = 'border-box';
    this.s.backgroundColor = 'var(--bg-1)';
    this.s.border = 'none';
    this.s.margin = '0';
    this.s.borderRadius = 'var(--rs)';
    this.s.padding = '0.25rem';
    this.s.transition = 'background-color 0.1s';
    this.s.color = 'white';
    this.s.cursor = 'pointer';
    this.s.fontSize = '1rem';
    this.el.nativeElement.innerHTML = `<img src='../../assets/Icons/${this.icon}.svg' style='display: block'/>`;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.s.backgroundColor = 'var(--bg-3)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.s.backgroundColor = 'var(--bg-1)';
  }

  @HostListener('mousedown') onMouseDown() {
    this.s.backgroundColor = 'var(--bg-2)';
  }

  @HostListener('mouseup') onMouseUp() {
    this.s.backgroundColor = 'var(--bg-3)';
  }
}
