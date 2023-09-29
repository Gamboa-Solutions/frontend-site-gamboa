import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  pageTitle!: string;

  constructor(private translate: TranslateService) {
    this.translate.get('TITULO').subscribe((translation: string) => {
      this.pageTitle = translation;
    });
  }
}
