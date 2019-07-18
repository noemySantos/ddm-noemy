import { TestBed } from '@angular/core/testing';
import { FilmeServiceService } from './filme-service.service';
describe('FilmeServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FilmeServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=filme-service.service.spec.js.map