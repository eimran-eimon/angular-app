import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Template} from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if (!condition){
      this.vcRef.createEmbeddedView(this.template);
    }else {
      this.vcRef.clear();
    }
  }
  constructor(private template: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
