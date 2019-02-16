import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalService } from '../../modal/modal.service';

import { MenuComponent } from './menu.component';

describe('Component: MenuComponent', () => {
	let fixture: ComponentFixture<MenuComponent>;
	let component: MenuComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				MenuComponent
			],
			providers: [
				ModalService
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(MenuComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
