import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { HomeModule } from './home/home.module';
import { CharacterModule } from './category/character/character.module';
import { PlanetModule } from './category/planet/planet.module';
import { StarshipModule } from './category/starship/starship.module';
import { ModalModule } from './modal/modal.module';
import { FilmModule } from './category/film/film.module';
import { SpecieModule } from './category/specie/specie.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		AppRoutingModule,
		HeaderModule,
		FooterModule,
		HomeModule,
		CharacterModule,
		PlanetModule,
		StarshipModule,
		ModalModule,
		FilmModule,
		SpecieModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
