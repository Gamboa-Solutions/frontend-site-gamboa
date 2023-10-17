import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './pages/projetos/projetos.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projetos',
    pathMatch: 'full',
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
