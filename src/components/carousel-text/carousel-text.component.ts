import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-carousel-text',
  templateUrl: './carousel-text.component.html',
  styleUrls: ['./carousel-text.component.scss'],
})
export class CarouselTextComponent {
  @Input() textBlocks!: any[];
  @ViewChild('swiper', { read: ElementRef })
  swiperRef: ElementRef | undefined;
  private swiper?: Swiper;

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(event: any) {}
}
