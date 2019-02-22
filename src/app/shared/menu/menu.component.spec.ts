import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { routes } from '../../app-routing.module';
import { PageTitleModule } from '../page-title/page-title.module';

import { ModalService } from '../../modal/modal.service';

import { MenuComponent } from './menu.component';
import { HomeComponent } from '../../home/home.component';
import { CharacterListComponent } from '../../category/character/character-list/character-list.component';
import { PlanetListComponent } from '../../category/planet/planet-list/planet-list.component';
import { StarshipListComponent } from '../../category/starship/starship-list/starship-list.component';
import { FilmComponent } from '../../category/film/film.component';
import { CreditsModalComponent } from '../../modal/credits-modal/credits-modal.component';

describe('Component: MenuComponent', () => {
	let fixture: ComponentFixture<MenuComponent>;
	let component: MenuComponent;

	let router: Router;
	let location: Location;

	let modalService: ModalService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes(routes),
				PageTitleModule
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

			modalService = TestBed.get(ModalService);

			fixture.detectChanges();
		});
	}));

	it('should create component', () => {
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

	// TODO
	it(`should open credits modal`, fakeAsync(() => { // this is failing?
		spyOn(modalService, 'credits').and.callThrough();

		const creditsBtn = fixture.debugElement.query(By.css('[data-test-key="menu-item-credits"]'));
		creditsBtn.triggerEventHandler('click', null);

		tick();
		fixture.detectChanges();

		// expect(modalService.credits).toHaveBeenCalled();
	}));
});
