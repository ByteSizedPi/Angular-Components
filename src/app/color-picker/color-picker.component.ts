import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild('preview') preview: ElementRef;
  @ViewChild('section') section: ElementRef;
  @ViewChild('content') content: ElementRef;
  @ViewChild('controls') controls: ElementRef;

  @ViewChild('red') red: ElementRef<HTMLInputElement>;
  @ViewChild('green') green: ElementRef<HTMLInputElement>;
  @ViewChild('blue') blue: ElementRef<HTMLInputElement>;

  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() opened: EventEmitter<boolean> = new EventEmitter();
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  @Output() copied: EventEmitter<string> = new EventEmitter();

  rgb: number[] = [0, 0, 0];
  format: boolean = true;
  rgbString: string = '';
  expanded: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    this.setVal(0, { valueAsNumber: 0 });
    this.setVal(1, { valueAsNumber: 0 });
    this.setVal(2, { valueAsNumber: 0 });
  }

  setVal = (index: number, value: any) => {
    this.rgb[index] = value.valueAsNumber;
    this.red.nativeElement.style.background = this.gradient(
      `rgb(0, ${this.rgb[1]}, ${this.rgb[2]})`,
      `rgb(255, ${this.rgb[1]}, ${this.rgb[2]})`
    );
    this.green.nativeElement.style.background = this.gradient(
      `rgb(${this.rgb[0]}, 0, ${this.rgb[2]})`,
      `rgb(${this.rgb[0]}, 255, ${this.rgb[2]})`
    );
    this.blue.nativeElement.style.background = this.gradient(
      `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`,
      `rgb(${this.rgb[0]}, ${this.rgb[1]}, 255)`
    );

    this.preview.nativeElement.style.backgroundColor = `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})`;

    setTimeout(() => {
      this.preview.nativeElement.style.color = this.getTextColor();
      this.updateFormat();
    }, 0);
  };

  updateFormat(inc: boolean = false) {
    if (inc && this.expanded) this.format = !this.format;
    this.rgbString = this.format ? this.toRGB() : this.toHex();
    this.change.emit(this.rgbString);
  }

  gradient(start: string, end: string) {
    return `linear-gradient(90deg, ${start} 0%, ${end} 100%)`;
  }

  toHex = () =>
    '#' +
    ((1 << 24) + (this.rgb[0] << 16) + (this.rgb[1] << 8) + this.rgb[2])
      .toString(16)
      .slice(1);

  toRGB = () => `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})`;

  getHex = (hex: string, from: number, to: number) =>
    parseInt(hex.substring(from, to), 16);

  getTextColor = () => {
    const hex = this.toHex();
    if (!this.expanded) return '#00000000';
    return this.getHex(hex, 1, 3) * 0.299 +
      this.getHex(hex, 3, 5) * 0.587 +
      this.getHex(hex, 5, 7) * 0.114 >
      150
      ? '#000'
      : '#fff';
  };

  show() {
    if (this.expanded) return;
    this.opened.emit(true);
    this.expanded = true;
    this.section.nativeElement.style.animation = 'cp 0.1s forwards ease-out';
    this.content.nativeElement.style.animation =
      'cp-content 0.1s forwards ease-out';
    this.preview.nativeElement.style.animation =
      'cp-preview 0.1s forwards ease-out';
    setTimeout(() => {
      this.preview.nativeElement.style.color = this.getTextColor();
      this.controls.nativeElement.style.display = 'block';
    }, 100);
  }

  async copy() {
    await navigator.clipboard.writeText(this.rgbString);
    this.copied.emit();
  }

  close() {
    setTimeout(() => {
      this.closed.emit(true);
      this.expanded = false;
      this.preview.nativeElement.style.color = this.getTextColor();
      this.controls.nativeElement.style.display = 'none';
      setTimeout(() => {
        this.section.nativeElement.style.animation =
          'cp-1 0.1s forwards ease-out';
        this.content.nativeElement.style.animation =
          'cp-content-1 0.1s forwards ease-out';
        this.preview.nativeElement.style.animation =
          'cp-preview-1 0.1s forwards ease-out';
      }, 50);
    }, 0);
  }
}
