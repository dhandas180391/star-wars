import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PageTitleModule } from '../../shared/page-title/page-title.module';

import { CharacterService } from './character.service';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
	declarations: [
		CharacterListComponent
	],
	exports: [
		CharacterListComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		PageTitleModule
	],
	providers: [
		CharacterService
	]
})
export class CharacterModule { }
