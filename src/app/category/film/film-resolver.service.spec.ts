import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FilmResolver } from './film-resolver.service';

describe('Resolver: FilmResolver', () => {
	let service: FilmResolver;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			],
			providers: [
				FilmResolver
			]
		});

		// inject the service
		service = TestBed.get(FilmResolver);
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should return a list of star wars films', () => {
		service.getFilms()
			.then((films) => {
				expect(films.length).toEqual(1);
				expect(films[0].title).toEqual('SIMMY');
			});

		const api = httpMock.expectOne(req => req.method === 'GET' && req.url === '/api/films');

		api.flush(
			[
				{
					title: 'SIMMY',
					episode_id: 4,
					opening_crawl: 'Best employee',
					director: 'Simmy Dhanda',
					producer: 'Simmy Dhanda',
					release_date: '2019-01-15',
					characters: [
						'https://www.swapi.co/api/people/1/'
					],
					planets: [
						'https://www.swapi.co/api/planets/2/'
					],
					starships: [
						'https://www.swapi.co/api/starships/2/'
					],
					vehicles: [
						'https://www.swapi.co/api/vehicles/4/'
					],
					species: [
						'https://www.swapi.co/api/species/5/'
					],
					created: '2014-12-10T14:23:31.880000Z',
					edited: '2015-04-11T09:46:52.774897Z',
					url: 'https://www.swapi.co/api/films/1/'
				}
			],
			{ status: 200, statusText: 'OK' },
		);
	});

	afterEach(() => {
		httpMock.verify();
	});
});
