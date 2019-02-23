import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

import { PageTitleModule } from '../../../shared/page-title/page-title.module';

import { ModalService } from '../../../modal/modal.service';

import { CharacterListComponent } from './character-list.component';
import { CharacterService } from '../character.service';
import { characterData } from '../../../test-helpers/test-data/characters';
import { Character } from '../character.interface';

class MockCharacterService {
	getCharacters(): Promise<{ count: number; next: string; previous: string | null; results: Character[]; }> {
		return Promise.resolve(characterData);
	}
}

describe('Component: CharacterListComponent', () => {
	let fixture: ComponentFixture<CharacterListComponent>;
	let component: CharacterListComponent;
	let service: CharacterService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				PageTitleModule
			],
			declarations: [
				CharacterListComponent
			],
			providers: [
				ModalService,
				{ provide: CharacterService, useClass: MockCharacterService },
				{
					provide: ActivatedRoute,
					useValue: {
						data: {
							subscribe: (fn: (value: Data) => void) => fn({
								title: 'Characters'
							})
						}
					}
				}
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(CharacterListComponent);
			component = fixture.componentInstance;
			service = TestBed.get(CharacterService);
		});
	}));

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it(`should set title to 'Characters'`, fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();

		const title = fixture.debugElement.nativeElement.querySelector('[data-test-key="characters-title"]');

		expect(component.title).toEqual('Characters');
		expect(title.textContent).toContain('Characters');
	}));

	it('should show loading spinner', () => {
		fixture.detectChanges();

		const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="characters-spinner"]');

		expect(component.loading).toBe(true);
		expect(spinner).not.toBeNull();
	});

	it(`should hide 'no characters..' message`, () => {
		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-characters-msg"]');

		expect(message).toBeNull();
	});

	describe('when ngOnInit() is called', () => {
		it('should call getCharacters()', () => {
			spyOn(service, 'getCharacters').and.callThrough();

			expect(service.getCharacters).not.toHaveBeenCalled();

			fixture.detectChanges();

			expect(service.getCharacters).toHaveBeenCalled();
		});

		it('should hide loading spinner', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const spinner = fixture.debugElement.nativeElement.querySelector('[data-test-key="characters-spinner"]');

			expect(component.loading).toBe(false);
			expect(spinner).toBeNull();
		}));

		it('should display one character in a list', fakeAsync(() => {
			fixture.detectChanges();
			tick();
			fixture.detectChanges();

			const characters = fixture.debugElement.queryAll(By.css('[data-test-key="characters-list"] li'));

			expect(component.characterList.length).toEqual(1);
			expect(characters.length).toEqual(1);
			expect(characters[0].nativeElement.textContent).toContain('Luke Skywalker');
		}));
	});

	it(`should show 'no characters..' message`, () => {
		fixture.detectChanges();

		component.loading = false;
		component.characterList = [];

		fixture.detectChanges();

		const message = fixture.debugElement.nativeElement.querySelector('[data-test-key="no-characters-msg"]');

		expect(message).not.toBeNull();
		expect(message.textContent).toContain('No characters were found');
	});
});
