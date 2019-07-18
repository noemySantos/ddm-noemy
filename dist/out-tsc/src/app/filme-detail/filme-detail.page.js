import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var FilmeDetailPage = /** @class */ (function () {
    function FilmeDetailPage(route) {
        this.route = route;
    }
    FilmeDetailPage.prototype.ngOnInit = function () {
        this.detail = this.route.snapshot.paramMap.get('detail');
    };
    FilmeDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-filme-detail',
            templateUrl: './filme-detail.page.html',
            styleUrls: ['./filme-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], FilmeDetailPage);
    return FilmeDetailPage;
}());
export { FilmeDetailPage };
//# sourceMappingURL=filme-detail.page.js.map