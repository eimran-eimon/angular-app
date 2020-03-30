import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appHighlightDirective]'
})
export class HighlightDirective implements OnInit{
  constructor(private element: ElementRef) {
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
