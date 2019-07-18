import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NovoFilmeModalPage } from './novo-filme-modal.page';
var routes = [
    {
        path: '',
        component: NovoFilmeModalPage
    }
];
var NovoFilmeModalPageModule = /** @class */ (function () {
    function NovoFilmeModalPageModule() {
    }
    NovoFilmeModalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NovoFilmeModalPage]
        })
    ], NovoFilmeModalPageModule);
    return NovoFilmeModalPageModule;
}());
export { NovoFilmeModalPageModule };
//# sourceMappingURL=novo-filme-modal.module.js.map