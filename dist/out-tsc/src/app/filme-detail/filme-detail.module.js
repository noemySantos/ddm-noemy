import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FilmeDetailPage } from './filme-detail.page';
var routes = [
    {
        path: '',
        component: FilmeDetailPage
    }
];
var FilmeDetailPageModule = /** @class */ (function () {
    function FilmeDetailPageModule() {
    }
    FilmeDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FilmeDetailPage]
        })
    ], FilmeDetailPageModule);
    return FilmeDetailPageModule;
}());
export { FilmeDetailPageModule };
//# sourceMappingURL=filme-detail.module.js.map