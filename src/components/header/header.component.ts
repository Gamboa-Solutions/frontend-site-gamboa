import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  TITULO!: string;
  @Input() pageTitle!: string;
  constructor(private translate: TranslateService) {}

  translateTitle() {
    this.translate.get(this.TITULO).subscribe((res: string) => {
      console.log(res);
    });
  }
}
