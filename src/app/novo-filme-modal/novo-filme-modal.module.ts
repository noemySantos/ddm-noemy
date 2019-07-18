import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoFilmeModalPage } from './novo-filme-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoFilmeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoFilmeModalPage]
})
export class NovoFilmeModalPageModule {}
