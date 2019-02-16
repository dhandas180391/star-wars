import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('Component: HeaderComponent', () => {
	let fixture: ComponentFixture<HeaderComponent>;
	let component: HeaderComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent
			],
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(HeaderComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should default title to 'Star Wars'`, () => {
		expect(component.title).toEqual('Star Wars');
	});
});
