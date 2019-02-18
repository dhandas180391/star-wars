import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ModalService } from '../../modal/modal.service';
import { CharacterService } from '../character/character.service';
import { SpecieService } from '../specie/specie.service';

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
				RouterTestingModule,
				HttpClientTestingModule
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
				},
				ModalService,
				CharacterService,
				SpecieService
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
