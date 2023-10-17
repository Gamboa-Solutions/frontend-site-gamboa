import {
  Component,
  ViewChild,
  AfterViewInit,
  HostListener,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('myCanvas', { static: false })
  myCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null = null;
  private bubbles: { x: number; y: number; radius: number }[] = [];

  ngAfterViewInit() {
    if (this.myCanvas) {
      const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
      this.ctx = canvas.getContext('2d');

      if (this.ctx) {
        this.initializeCanvas();
        this.animate();
      }
    }
  }

  initializeCanvas() {
    if (this.ctx) {
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Limpe o canvas
    if (this.ctx) {
      this.ctx.clearRect(
        0,
        0,
        this.myCanvas.nativeElement.width,
        this.myCanvas.nativeElement.height
      );

      // Desenhe as bolhas
      for (const bubble of this.bubbles) {
        this.ctx.beginPath();
        this.ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Atualize a posição das bolhas (pode ser uma animação mais complexa)
        bubble.x += Math.random() - 0.5;
        bubble.y += Math.random() - 0.5;
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Adicione uma nova bolha na posição do mouse
    this.bubbles.push({
      x:
        event.clientX -
        this.myCanvas.nativeElement.getBoundingClientRect().left,
      y:
        event.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top,
      radius: Math.random() * 30 + 10,
    });
  }
}
