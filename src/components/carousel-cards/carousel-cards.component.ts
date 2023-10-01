import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.scss'],
})
export class CarouselCardsComponent {
  @Input() slideOpts: any; // Opções do carrossel
  @Input() cards!: any[];
}
