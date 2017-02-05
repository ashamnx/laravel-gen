import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCompiled]'
})
export class CompiledDirective {

  constructor(el: ElementRef) {
    console.log('el', el.nativeElement);
  }

}
