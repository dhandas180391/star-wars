import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('Component: FooterComponent', () => {
	let fixture: ComponentFixture<FooterComponent>;
	let component: FooterComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FooterComponent
			],
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(FooterComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
