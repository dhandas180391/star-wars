import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlanetService } from './planet.service';

describe('Service: PlanetService', () => {
    let service: PlanetService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                PlanetService
            ]
        });

        // inject the service
        service = TestBed.get(PlanetService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should return a list of star wars characters', () => {
        service.getPlanets()
            .then((response) => {
                expect(response.results.length).toEqual(1);
                expect(response.results[0].name).toEqual('Simmy Dhanda');
            });

        const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/planets');

        api.flush(
            [{ name: 'Simmy Dhanda' }],
            { status: 200, statusText: 'OK' },
        );
    });

    afterEach(() => {
        httpMock.verify();
    });
});
