import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective implements AfterViewInit {
  @Input() mask: string;
  unmaskedValue: string = '';
  dot = decodeURI("%E2%80%A2");
  constructor(private elRef: ElementRef) {}
  @HostListener('blur') onblur() {
    if(this.mask != "false"){
      this.mask_all()
    }
  }
  @HostListener('change') onchange(){
    this.unmaskedValue = this.elRef.nativeElement.value;
  }
  @HostListener('focus') onfocus(){
    this.elRef.nativeElement.value = this.unmaskedValue;
  }
  mask_all(): void{
    let val = this.unmaskedValue;
    val = val.replace(/./g, decodeURI("%E2%80%A2"));
    this.elRef.nativeElement.value = val;
  }
  ngAfterViewInit(): void {}
}
