import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element: ElementRef) { }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.resaltado(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltado(null);
  }

  private resaltado(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
