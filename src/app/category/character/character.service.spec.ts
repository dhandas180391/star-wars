import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterService } from './character.service';

describe('Service: CharacterService', () => {
	let service: CharacterService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				CharacterService
			]
		});

		// inject the service
		service = TestBed.get(CharacterService);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should return a list of star wars characters', () => {
		service.getCharacters()
			.then((response) => {
				expect(response.results.length).toEqual(1);
				expect(response.results[0].name).toEqual('Simmy Dhanda');
			});

		const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/people');

		api.flush(
			[{ name: 'Simmy Dhanda' }],
			{ status: 200, statusText: 'OK' },
		);
	});

	it('should return a character', () => {
		service.getCharacter('/api/people/1')
			.then((character) => {
				expect(character.name).toEqual('Simmy Dhanda');
			});

		const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/people/1');

		api.flush(
			{ name: 'Simmy Dhanda' },
			{ status: 200, statusText: 'OK' },
		);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
