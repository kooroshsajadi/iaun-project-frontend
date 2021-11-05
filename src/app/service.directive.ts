import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appService]'
})
export class ServiceDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
