import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highLightColor = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private element: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'green');
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
