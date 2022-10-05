import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'icon',
  template: `
    <div class="icon-size">
      <img [src]="'assets/Icons/' + src + '.svg'" #img />
    </div>
  `,
  styles: [
    `
      .icon-size {
        min-height: 1.5rem;
        min-width: 1.5rem;
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        opacity: 0;
        transition: opacity 0.4s;
      }
    `,
  ],
})
export class IconComponent implements AfterViewInit {
  @Input() src: string;
  @ViewChild('img') img: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    this.img.nativeElement.onload = () =>
      (this.img.nativeElement.style.opacity = '1');
  }
}
