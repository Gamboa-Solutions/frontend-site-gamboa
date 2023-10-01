import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { CardComponent } from '../components/card/card.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CarouselCardsComponent } from '../components/carousel-cards/carousel-cards.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { CarouselTextComponent } from '../components/carousel-text/carousel-text.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { ReactiveFormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselComponent,
    CarouselCardsComponent,
    ContactFormComponent,
    CarouselTextComponent,
    FooterComponent,
    HeaderComponent,
    ProjetosComponent,
    ThumbnailComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
