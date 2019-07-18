import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var NovoFilmeModalPage = /** @class */ (function () {
    function NovoFilmeModalPage(modalController) {
        this.modalController = modalController;
        this.novo_perfil = {
            "avatar": "",
            "nome": "",
        };
    }
    NovoFilmeModalPage.prototype.ngOnInit = function () {
    };
    NovoFilmeModalPage.prototype.add = function () {
        this.modalController.dismiss(this.novo_perfil);
    };
    NovoFilmeModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-novo-filme-modal',
            templateUrl: './novo-filme-modal.page.html',
            styleUrls: ['./novo-filme-modal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], NovoFilmeModalPage);
    return NovoFilmeModalPage;
}());
export { NovoFilmeModalPage };
//# sourceMappingURL=novo-filme-modal.page.js.map