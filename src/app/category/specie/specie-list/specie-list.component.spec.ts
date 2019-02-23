import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Data } from '@angular/router';

import { PageTitleModule } from '../../../shared/page-title/page-title.module';

import { SpecieListComponent } from './specie-list.component';

describe('Component: SpecieListComponent', () => {
	let fixture: ComponentFixture<SpecieListComponent>;
	let component: SpecieListComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				PageTitleModule
			],
			declarations: [
				SpecieListComponent
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						data: {
							subscribe: (fn: (value: Data) => void) => fn({
								title: 'Species'
							})
						}
					}
				}
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(SpecieListComponent);
			component = fixture.componentInstance;
		});
	}));

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it(`should set title to 'Species'`, fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="species-title"]');

		expect(component.title).toEqual('Species');
		expect(title.textContent).toContain('Species');
	}));

	it('should show loading spinner', () => {
		fixture.detectChanges();

		const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="species-spinner"]');

		expect(component.loading).toBe(true);
		expect(spinner).not.toBeNull();
	});
});
