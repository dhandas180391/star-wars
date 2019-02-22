import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalService } from '../../modal/modal.service';

import { MenuModule } from '../menu/menu.module';

import { HeaderComponent } from './header.component';

describe('Component: HeaderComponent', () => {
	let fixture: ComponentFixture<HeaderComponent>;
	let component: HeaderComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent
			],
			imports: [
				RouterTestingModule,
				MenuModule
			],
			providers: [
				ModalService
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(HeaderComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it(`should default title to 'Star Wars'`, () => {
		expect(component.title).toEqual('Star Wars');
	});
});
