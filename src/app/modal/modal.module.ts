import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './modal.service';

import { CharacterModalComponent } from './character-modal/character-modal.component';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';
import { StarshipModalComponent } from './starship-modal/starship-modal.component';
import { CreditsModalComponent } from './credits-modal/credits-modal.component';

@NgModule({
	entryComponents: [
		CharacterModalComponent,
		PlanetModalComponent,
		StarshipModalComponent,
		CreditsModalComponent
	],
	declarations: [
		CharacterModalComponent,
		PlanetModalComponent,
		StarshipModalComponent,
		CreditsModalComponent
	],
	imports: [
		CommonModule,
		NgbModule
	],
	providers: [
		ModalService
	],
	exports: [
		NgbModule
	]
})
export class ModalModule { }
