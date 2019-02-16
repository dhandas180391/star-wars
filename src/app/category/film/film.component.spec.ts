import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Data } from '@angular/router';

import { FilmComponent } from './film.component';

describe('Component: FilmComponent', () => {
	let fixture: ComponentFixture<FilmComponent>;
	let component: FilmComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FilmComponent
			],
			imports: [
				RouterTestingModule
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						data: {
							subscribe: (fn: (value: Data) => void) => fn({
								title: 'Films'
							})
						}
					}
				}
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(FilmComponent);
			component = fixture.componentInstance;
		});
	}));

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it(`should set title to 'Films'`, fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="film-title"]');

		expect(component.title).toEqual('Films');
		expect(title.textContent).toContain('Films');
	}));
});
