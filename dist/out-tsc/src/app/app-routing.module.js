import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'lista-filmes', loadChildren: './lista-filmes/lista-filmes.module#ListaFilmesPageModule' },
    { path: 'detalhes-filmes', loadChildren: './detalhes-filmes/detalhes-filmes.module#DetalhesFilmesPageModule' },
    { path: 'novo-filme-modal', loadChildren: './novo-filme-modal/novo-filme-modal.module#NovoFilmeModalPageModule' },
    { path: 'filme-detail', loadChildren: './filme-detail/filme-detail.module#FilmeDetailPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map