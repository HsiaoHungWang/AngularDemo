import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight:string = "";
  constructor(private el:ElementRef, private renderer:Renderer2) {
     // el.nativeElement
    
   }

   ngOnInit(){
    if(this.appHighlight === ""){
      this.appHighlight = "silver";
    }
    this.renderer.setStyle(this.el.nativeElement,'background-color', this.appHighlight);
   }

   @HostListener('mouseenter')
   onMouseEnter(){
     this.hightlight('yellow')
   }
   
   @HostListener('mouseleave')
   onMouseLeave(){
     this.hightlight(this.appHighlight || 'silver');
   }

   private hightlight(color:string){
     this.renderer.setStyle(this.el.nativeElement,'background-color', color);
   }

}
