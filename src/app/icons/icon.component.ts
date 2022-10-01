import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  template: `<img [src]="'assets/Icons/' + src + '.svg'" />`,
  styles: [
    `
      img {
        display: block;
        margin-right: 0.5rem;
      }
    `,
  ],
})
export class IconComponent {
  @Input() src: string;
}
