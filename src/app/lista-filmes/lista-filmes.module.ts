import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaFilmesPage } from './lista-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaFilmesPage]
})
export class ListaFilmesPageModule {}
