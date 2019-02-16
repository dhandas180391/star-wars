import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
		CommonModule
	],
	providers: [
		FilmResolver
	]
})
export class FilmModule { }
