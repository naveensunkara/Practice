import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  constructor(private elRef: ElementRef) {}

}
