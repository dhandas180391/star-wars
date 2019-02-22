import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';

describe('Component: PageTitleComponent', () => {
	let fixture: ComponentFixture<PageTitleComponent>;
	let component: PageTitleComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PageTitleComponent
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(PageTitleComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should not display title if null', () => {
		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="test-title"]');

		expect(title).toBeNull();
	});

	it('should display title if not null', () => {
		component.title = 'Test';

		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="test-title"]');

		expect(title.textContent).toContain('Test');
	});

	it('should not display icon if iconClass is null', () => {
		component.title = 'Test';

		fixture.detectChanges();

		const icon = fixture.debugElement.nativeElement.querySelector('[data-test-key="test-title"] i');

		expect(icon).toBeNull();
	});

	it('should display icon if iconClass is not null', () => {
		component.title = 'Test';
		component.iconClass = 'fa-film';

		fixture.detectChanges();

		const icon = fixture.debugElement.nativeElement.querySelector('[data-test-key="test-title"] i');

		expect(icon).not.toBeNull();
	});
});
