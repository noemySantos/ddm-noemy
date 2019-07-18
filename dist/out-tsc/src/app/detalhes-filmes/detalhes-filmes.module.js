import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetalhesFilmesPage } from './detalhes-filmes.page';
var routes = [
    {
        path: '',
        component: DetalhesFilmesPage
    }
];
var DetalhesFilmesPageModule = /** @class */ (function () {
    function DetalhesFilmesPageModule() {
    }
    DetalhesFilmesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetalhesFilmesPage]
        })
    ], DetalhesFilmesPageModule);
    return DetalhesFilmesPageModule;
}());
export { DetalhesFilmesPageModule };
//# sourceMappingURL=detalhes-filmes.module.js.map