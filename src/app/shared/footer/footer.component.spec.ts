import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalService } from '../../modal/modal.service';

import { FooterComponent } from './footer.component';

describe('Component: FooterComponent', () => {
	let fixture: ComponentFixture<FooterComponent>;
	let component: FooterComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FooterComponent
			],
			imports: [
				RouterTestingModule
			],
			providers: [
				ModalService
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(FooterComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create component', () => {
		expect(component).toBeTruthy();
	});
});
