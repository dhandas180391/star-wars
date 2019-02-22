import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StarshipService } from './starship.service';

describe('Service: StarshipService', () => {
	let service: StarshipService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				StarshipService
			]
		});

		// inject the service
		service = TestBed.get(StarshipService);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should return a list of star wars starships', () => {
		service.getStarships()
			.then((response) => {
				expect(response.results.length).toEqual(1);
				expect(response.results[0].name).toEqual('Simmy Dhanda');
			});

		const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/starships');

		api.flush(
			[{ name: 'Simmy Dhanda' }],
			{ status: 200, statusText: 'OK' },
		);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
