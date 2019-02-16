import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

import { ModalService } from '../../../modal/modal.service';

import { PlanetListComponent } from './planet-list.component';
import { PlanetService } from '../planet.service';
import { planetsData } from '../../../test-helpers/test-data/planets';
import { Planet } from '../planet.interface';

class MockPlanetService {
	getPlanets(): Promise<{ count: number; next: string; previous: string | null; results: Planet[]; }> {
		return Promise.resolve(planetsData);
	}
}

describe('Component: PlanetListComponent', () => {
	let fixture: ComponentFixture<PlanetListComponent>;
	let component: PlanetListComponent;
	let service: PlanetService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule
			],
			declarations: [
				PlanetListComponent
			],
			providers: [
				ModalService,
				{ provide: PlanetService, useClass: MockPlanetService },
				{
					provide: ActivatedRoute,
					useValue: {
						data: {
							subscribe: (fn: (value: Data) => void) => fn({
								title: 'Planets'
							})
						}
					}
				}
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(PlanetListComponent);
			component = fixture.componentInstance;
			service = TestBed.get(PlanetService);
		});
	}));

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it(`should set title to 'Planets'`, fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="planet-title"]');

		expect(component.title).toEqual('Planets');
		expect(title.textContent).toContain('Planets');
	}));

	it('should show loading spinner', () => {
		fixture.detectChanges();

		const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="planet-list-spinner"]');

		expect(component.loading).toBe(true);
		expect(spinner).not.toBeNull();
	});

	it(`should hide 'no planets..' message`, () => {
		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-planets-msg"]');

		expect(message).toBeNull();
	});

	describe('when ngOnInit() is called', () => {
		it('should call getPlanets()', () => {
			spyOn(service, 'getPlanets').and.callThrough();

			expect(service.getPlanets).not.toHaveBeenCalled();

			fixture.detectChanges();

			expect(service.getPlanets).toHaveBeenCalled();
		});

		it('should hide loading spinner', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="planet-list-spinner"]');

			expect(component.loading).toBe(false);
			expect(spinner).toBeNull();
		}));

		it('should display one planet in a list', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const planets = fixture.debugElement.queryAll(By.css('[data-test-key="planet-list"] li'));

			expect(component.planetList.length).toEqual(1);
			expect(planets.length).toEqual(1);
			expect(planets[0].nativeElement.textContent).toContain('Alderaan');
		}));
	});

	it(`should show 'no planets..' message`, () => {
		fixture.detectChanges();

		component.loading = false;
		component.planetList = [];

		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-planets-msg"]');

		expect(message).not.toBeNull();
		expect(message.textContent).toContain('No planets were found');
	});
});
