import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var FilmeServiceService = /** @class */ (function () {
    function FilmeServiceService(http) {
        this.http = http;
        this.URL_BASE = 'https://5d262d00eeb36400145c59b3.mockapi.io/filme';
    }
    FilmeServiceService.prototype.list = function () {
        return this.http.get(this.URL_BASE);
    };
    FilmeServiceService.prototype.add = function (filme) {
        return this.http.post(this.URL_BASE, filme);
    };
    FilmeServiceService.prototype.remove = function (filme) {
        return this.http.delete(this.URL_BASE + filme.id);
    };
    FilmeServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FilmeServiceService);
    return FilmeServiceService;
}());
export { FilmeServiceService };
//# sourceMappingURL=filme-service.service.js.map