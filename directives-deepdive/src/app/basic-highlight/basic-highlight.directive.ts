import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const element = this.elementRef.nativeElement.style;
    element.backgroundColor = 'green';
    element.color = 'red';
    element.padding = '10px';
    element.fontSize = '30px';
    element.border = '1px solid red';
  }
}
