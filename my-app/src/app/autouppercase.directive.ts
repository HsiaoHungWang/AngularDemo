import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutouppercase]'
})
export class AutouppercaseDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('input')
  onInput(){
    const upperCaseValue = this.el.nativeElement.value.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'value', upperCaseValue);
  }
}
