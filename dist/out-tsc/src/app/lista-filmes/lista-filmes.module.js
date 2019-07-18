import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaFilmesPage } from './lista-filmes.page';
var routes = [
    {
        path: '',
        component: ListaFilmesPage
    }
];
var ListaFilmesPageModule = /** @class */ (function () {
    function ListaFilmesPageModule() {
    }
    ListaFilmesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListaFilmesPage]
        })
    ], ListaFilmesPageModule);
    return ListaFilmesPageModule;
}());
export { ListaFilmesPageModule };
//# sourceMappingURL=lista-filmes.module.js.map