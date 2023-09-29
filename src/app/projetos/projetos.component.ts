import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
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
  }
}
