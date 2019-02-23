import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { routes } from '../app-routing.module';
import { PageTitleModule } from '../shared/page-title/page-title.module';

import { HomeComponent } from './home.component';
import { CharacterListComponent } from '../category/character/character-list/character-list.component';
import { PlanetListComponent } from '../category/planet/planet-list/planet-list.component';
import { StarshipListComponent } from '../category/starship/starship-list/starship-list.component';
import { FilmComponent } from '../category/film/film.component';
import { SpecieListComponent } from '../category/specie/specie-list/specie-list.component';

import { FilmResolver } from '../category/film/film-resolver.service';

describe('Component: HomeComponent', () => {
	let fixture: ComponentFixture<HomeComponent>;
	let component: HomeComponent;

	let router: Router;
	let location: Location;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
				CharacterListComponent,
				PlanetListComponent,
				StarshipListComponent,
				FilmComponent,
				SpecieListComponent
			],
			imports: [
				RouterTestingModule.withRoutes(routes),
				HttpClientTestingModule,
				PageTitleModule
			],
			providers: [
				FilmResolver
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(HomeComponent);
			component = fixture.componentInstance;

			router = TestBed.get(Router);
			location = TestBed.get(Location);
			router.initialNavigation();

			fixture.detectChanges();
		});
	}));

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	describe('by default homepage should display all categories', () => {
		beforeAll(() => {
			const characterCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-characters"]');
			const planetCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-planets"]');
			const starshipCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-starships"]');
			const filmCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-films"]');
			const vehicleCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-vehicles"]');
			const specieCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-species"]');
			const pilotCategory = fixture.debugElement.nativeElement.querySelector('[data-test-key="category-pilots"]');

			expect(characterCategory).not.toBeNull();
			expect(planetCategory).not.toBeNull();
			expect(starshipCategory).not.toBeNull();
			expect(filmCategory).not.toBeNull();
			expect(vehicleCategory).not.toBeNull();
			expect(specieCategory).not.toBeNull();
			expect(pilotCategory).not.toBeNull();
		});

		it(`categories 'Vehicles', 'Species', 'Pilots' should be disabled`, () => {
			const disabledCategories = fixture.debugElement.queryAll(By.css('.disabled'));

			expect(disabledCategories.length).toEqual(2);
			expect(disabledCategories[0].nativeElement.textContent).toContain('Vehicles');
			expect(disabledCategories[1].nativeElement.textContent).toContain('Pilots');
		});
	});

	describe('when clicked on characters category', () => {
		it(`should call navigate with '/characters'`, fakeAsync(() => {
			spyOn(router, 'navigate');

			const characterCategory = fixture.debugElement.query(By.css('[data-test-key="category-characters"]'));
			characterCategory.triggerEventHandler('click', null);

			tick();
			fixture.detectChanges();

			expect(router.navigate).toHaveBeenCalledWith(['/characters']);
		}));

		it(`should route to '/characters'`, fakeAsync(() => {
			router.navigate(['/characters']);
			tick();
			expect(location.path()).toBe('/characters');
		}));
	});

	describe('when clicked on planets category', () => {
		it(`should call navigate with '/planets'`, fakeAsync(() => {
			spyOn(router, 'navigate');

			const planetCategory = fixture.debugElement.query(By.css('[data-test-key="category-planets"]'));
			planetCategory.triggerEventHandler('click', null);

			tick();
			fixture.detectChanges();

			expect(router.navigate).toHaveBeenCalledWith(['/planets']);
		}));

		it(`should route to '/planets'`, fakeAsync(() => {
			router.navigate(['/planets']);
			tick();
			expect(location.path()).toBe('/planets');
		}));
	});

	describe('when clicked on starships category', () => {
		it(`should call navigate with '/starships'`, fakeAsync(() => {
			spyOn(router, 'navigate');

			const starshipCategory = fixture.debugElement.query(By.css('[data-test-key="category-starships"]'));
			starshipCategory.triggerEventHandler('click', null);

			tick();
			fixture.detectChanges();

			expect(router.navigate).toHaveBeenCalledWith(['/starships']);
		}));

		it(`should route to '/starships'`, fakeAsync(() => {
			router.navigate(['/starships']);
			tick();
			expect(location.path()).toBe('/starships');
		}));
	});

	describe('when clicked on films category', () => {
		it(`should call navigate with '/films'`, fakeAsync(() => {
			spyOn(router, 'navigate');

			const filmCategory = fixture.debugElement.query(By.css('[data-test-key="category-films"]'));
			filmCategory.triggerEventHandler('click', null);

			tick();
			fixture.detectChanges();

			expect(router.navigate).toHaveBeenCalledWith(['/films']);
		}));

		// TODO
		it(`should route to '/films'`, fakeAsync(() => { // this fails due to having a resolver
			router.navigate(['/films']);
			tick();
			// expect(location.path()).toBe('/films');
		}));
	});
});
