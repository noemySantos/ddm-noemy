import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NovoFilmeModalPage } from '../novo-filme-modal/novo-filme-modal.page';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FilmeServiceService } from '../services/filme-service.service';
var ListaFilmesPage = /** @class */ (function () {
    // Declarar uma instancia no construtor
    function ListaFilmesPage(modalController, alertController, toastController, storage, loadingController, filmeServiceService) {
        var _this = this;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.filmeServiceService = filmeServiceService;
        this.filmes = [];
        this.loadingController.create({
            message: 'BEM VINDO',
        }).then(function (loader) {
            loader.present();
            _this.filmeServiceService.list().subscribe(function (data) {
                _this.filmes = data;
                loader.dismiss();
            });
        });
    }
    ListaFilmesPage.prototype.add = function (filme) {
        var _this = this;
        this.loadingController.create({
            message: 'Carregando, aguarde...',
        }).then(function (loader) {
            loader.present();
            _this.filmeServiceService.add(filme).subscribe(function (data) {
                _this.filmes.log.push(data);
                loader.dismiss();
            });
        });
    };
    ListaFilmesPage.prototype.modal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: NovoFilmeModalPage
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        modal.onDidDismiss().then(function (filme) {
                            _this.add(filme.data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListaFilmesPage = tslib_1.__decorate([
        Component({
            selector: 'app-lista-filmes',
            templateUrl: './lista-filmes.page.html',
            styleUrls: ['./lista-filmes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, AlertController, ToastController, Storage, LoadingController, FilmeServiceService])
    ], ListaFilmesPage);
    return ListaFilmesPage;
}());
export { ListaFilmesPage };
//# sourceMappingURL=lista-filmes.page.js.map