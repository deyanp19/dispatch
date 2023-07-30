import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
@Input() set appMyIf(isVisible:boolean) {
  if (isVisible) {
    this.viewCintainerRef.createEmbeddedView(this.templateRef, {data:123, $implicit:'HELLO'})
  } else {

    this.viewCintainerRef.clear();
  }
}
  constructor(
    private viewCintainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

}
