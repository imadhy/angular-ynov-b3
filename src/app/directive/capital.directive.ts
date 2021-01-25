import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {
  @Input('format') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format === 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }

}
