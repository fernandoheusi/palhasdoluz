import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg',
  standalone: true,
  templateUrl: 'svg.component.svg',
})
export class SvgComponent {
  @Input() stroke: string = '#ccc';
  @Input() path!: string ;
}