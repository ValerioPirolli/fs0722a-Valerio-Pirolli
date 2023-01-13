import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSfondo]'
})
export class SfondoDirective {

  constructor(private el:ElementRef, private render:Renderer2) {
    render.setStyle(el.nativeElement,"backgroundColor","lightgreen")
   }

}
