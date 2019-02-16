import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('Component: HomeComponent', () => {
	let fixture: ComponentFixture<HomeComponent>;
	let component: HomeComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomeComponent
			],
			imports: [
				RouterTestingModule
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(HomeComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});
});
