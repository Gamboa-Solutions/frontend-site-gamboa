import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @ViewChild('swiper', { read: ElementRef })
  swiperRef: ElementRef | undefined;
  private swiper?: Swiper;

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(event: any) {}
}