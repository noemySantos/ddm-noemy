import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-filmes', loadChildren: './lista-filmes/lista-filmes.module#ListaFilmesPageModule' },
  { path: 'novo-filme-modal', loadChildren: './novo-filme-modal/novo-filme-modal.module#NovoFilmeModalPageModule' },
  { path: 'filme-detail', loadChildren: './filme-detail/filme-detail.module#FilmeDetailPageModule' },
  { path: 'perfil-detail', loadChildren: './perfil-detail/perfil-detail.module#PerfilDetailPageModule' },
  { path: 'novo-perfil-modal', loadChildren: './novo-perfil-modal/novo-perfil-modal.module#NovoPerfilModalPageModule' },
  { path: 'dados-detail', loadChildren: './dados-detail/dados-detail.module#DadosDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
