import { Component, Input } from '@angular/core';

@Component({
  selector: 'j-button',
  template: `
    <button [ngClass]="active ? 'active' : ''" class="row center-vertical">
      <ng-content select="[btn-icon]"></ng-content>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() active: boolean = false;
}
