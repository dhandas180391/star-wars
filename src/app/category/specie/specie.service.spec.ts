import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SpecieService } from './specie.service';

describe('Service: SpecieService', () => {
	let service: SpecieService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				SpecieService
			]
		});

		// inject the service
		service = TestBed.get(SpecieService);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should return a list of star wars species', () => {
		service.getSpecies()
			.then((response) => {
				expect(response.results.length).toEqual(1);
				expect(response.results[0].name).toEqual('Simmy Dhanda');
			});

		const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/species');

		api.flush(
			[{ name: 'Simmy Dhanda' }],
			{ status: 200, statusText: 'OK' },
		);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
