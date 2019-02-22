import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

import { PageTitleModule } from '../../../shared/page-title/page-title.module';

import { ModalService } from '../../../modal/modal.service';

import { StarshipListComponent } from './starship-list.component';
import { StarshipService } from '../starship.service';
import { starshipsData } from '../../../test-helpers/test-data/starships';
import { Starship } from '../starship.interface';

class MockStarshipService {
	getStarships(): Promise<{ count: number; next: string; previous: string | null; results: Starship[] }> {
		return Promise.resolve(starshipsData);
	}
}

describe('Component: StarshipListComponent', () => {
	let fixture: ComponentFixture<StarshipListComponent>;
	let component: StarshipListComponent;
	let service: StarshipService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				PageTitleModule
			],
			declarations: [
				StarshipListComponent
			],
			providers: [
				ModalService,
				{ provide: StarshipService, useClass: MockStarshipService },
				{
					provide: ActivatedRoute,
					useValue: {
						data: {
							subscribe: (fn: (value: Data) => void) => fn({
								title: 'Starships'
							})
						}
					}
				}
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(StarshipListComponent);
			component = fixture.componentInstance;
			service = TestBed.get(StarshipService);
		});
	}));

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it(`should set title to 'Starships'`, fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="starships-title"]');

		expect(component.title).toEqual('Starships');
		expect(title.textContent).toContain('Starships');
	}));

	it('should show loading spinner', () => {
		fixture.detectChanges();

		const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="starship-list-spinner"]');

		expect(component.loading).toBe(true);
		expect(spinner).not.toBeNull();
	});

	it(`should hide 'no starships..' message`, () => {
		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-starships-msg"]');

		expect(message).toBeNull();
	});

	describe('when ngOnInit() is called', () => {
		it('should call getStarships()', () => {
			spyOn(service, 'getStarships').and.callThrough();

			expect(service.getStarships).not.toHaveBeenCalled();

			fixture.detectChanges();

			expect(service.getStarships).toHaveBeenCalled();
		});

		it('should hide loading spinner', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="starship-list-spinner"]');

			expect(component.loading).toBe(false);
			expect(spinner).toBeNull();
		}));

		it('should display one starship in a list', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const starships = fixture.debugElement.queryAll(By.css('[data-test-key="starship-list"] li'));

			expect(component.starshipList.length).toEqual(1);
			expect(starships.length).toEqual(1);
			expect(starships[0].nativeElement.textContent).toContain('Executor');
		}));
	});

	it(`should show 'no starships..' message`, () => {
		fixture.detectChanges();

		component.loading = false;
		component.starshipList = [];

		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-starships-msg"]');

		expect(message).not.toBeNull();
		expect(message.textContent).toContain('No starships were found');
	});
});
