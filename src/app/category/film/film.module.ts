import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTitleModule } from '../../shared/page-title/page-title.module';

import { CharacterService } from '../character/character.service';
import { SpecieService } from '../specie/specie.service';

import { FilmComponent } from './film.component';
import { FilmResolver } from './film-resolver.service';

@NgModule({
	declarations: [
		FilmComponent
	],
	exports: [
		FilmComponent
	],
	imports: [
		CommonModule,
		PageTitleModule
	],
	providers: [
		FilmResolver,
		CharacterService,
		SpecieService
	]
})
export class FilmModule { }
