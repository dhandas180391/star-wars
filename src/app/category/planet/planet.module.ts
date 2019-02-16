import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanetService } from './planet.service';
import { PlanetListComponent } from './planet-list/planet-list.component';

@NgModule({
	declarations: [
		PlanetListComponent
	],
	exports: [
		PlanetListComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	providers: [
		PlanetService
	]
})
export class PlanetModule { }
