import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { MenuModule } from './shared/menu/menu.module';
import { HomeModule } from './home/home.module';
import { CharacterModule } from './category/character/character.module';
import { PlanetModule } from './category/planet/planet.module';
import { StarshipModule } from './category/starship/starship.module';
import { ModalModule } from './modal/modal.module';
import { FilmModule } from './category/film/film.module';

import { AppComponent } from './app.component';

describe('Component: AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HeaderModule,
				FooterModule,
				MenuModule,
				HomeModule,
				CharacterModule,
				PlanetModule,
				StarshipModule,
				ModalModule,
				FilmModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(AppComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});
