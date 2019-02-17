import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ModalService } from '../../modal/modal.service';
import { routes } from '../../app-routing.module';

import { MenuComponent } from './menu.component';
import { HomeComponent } from '../../home/home.component';
import { CharacterListComponent } from '../../category/character/character-list/character-list.component';
import { PlanetListComponent } from '../../category/planet/planet-list/planet-list.component';
import { StarshipListComponent } from '../../category/starship/starship-list/starship-list.component';
import { FilmComponent } from '../../category/film/film.component';

describe('Component: MenuComponent', () => {
	let fixture: ComponentFixture<MenuComponent>;
	let component: MenuComponent;
	let router: Router;
	let location: Location;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes(routes),
			],
			declarations: [
				MenuComponent,
				HomeComponent,
				CharacterListComponent,
				PlanetListComponent,
				StarshipListComponent,
				FilmComponent
			],
			providers: [
				ModalService
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(MenuComponent);
			component = fixture.componentInstance;

			router = TestBed.get(Router);
			location = TestBed.get(Location);
			router.initialNavigation();

			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should navigate to '/home' page when empty route is given`, fakeAsync(() => {
		router.navigate(['']);
		tick();
		expect(location.path()).toBe('/home');
	}));

	it(`should navigate to characters page if route is '/characters'`, fakeAsync(() => {
		router.navigate(['/characters']);
		tick();
		expect(location.path()).toBe('/characters');
	}));
});
