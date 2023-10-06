import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  @ViewChild('myCanvas', { static: false }) myCanvas: any;
  contactForm!: FormGroup;
  pageFooter!: string;
  pageTitle!: string;
  title!: string;
  content!: string;
  imageUrl = 'https://i.gifer.com/7sFa.gif';
  label!: string;

  images = [
    'https://i.gifer.com/Ajyj.gif',
    'https://i.gifer.com/7sY0.gif',
    'https://i.gifer.com/QWR8.gif',
    'https://i.gifer.com/LrMw.gif',
    'https://i.gifer.com/4RNm.gif',
    'https://i.gifer.com/7sFa.gif',
  ];

  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
  };

  cards = [
    { title: 'Card 1', content: 'Conteúdo do Card 1' },
    { title: 'Card 2', content: 'Conteúdo do Card 2' },
    { title: 'Card 3', content: 'Conteúdo do Card 3' },
  ];

  textBlocks = [
    { title: 'Texto do Bloco 1', subtitle: 'Subtítulo do Bloco 1' },
    { title: 'Texto do Bloco 1', subtitle: 'Subtítulo do Bloco 1' },
    { title: 'Texto do Bloco 1', subtitle: 'Subtítulo do Bloco 1' },
  ];

  constructor(private translate: TranslateService) {
    this.translate.get('TITULO').subscribe((translation: string) => {
      this.pageTitle = translation;
    });

    this.translate.get('titulo').subscribe((translation: string) => {
      this.title = translation;
    });

    this.translate.get('conteudo').subscribe((translation: string) => {
      this.content = translation;
    });

    this.translate.get('label').subscribe((translation: string) => {
      this.label = translation;
    });

    this.translate.get('RODAPE').subscribe((translation: string) => {
      this.pageFooter = translation;
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const canvas: HTMLCanvasElement = this.myCanvas?.nativeElement; // Verificação de nulidade com "?"

    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Desenha um retângulo vermelho no canvas
        ctx.fillStyle = 'red';
        ctx.fillRect(50, 50, 200, 200);
      } else {
        console.error('getContext retornou null');
      }
    } else {
      console.error('Canvas não encontrado');
    }
  }
}
