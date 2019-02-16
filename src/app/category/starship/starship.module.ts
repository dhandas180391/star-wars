import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StarshipService } from './starship.service';
import { StarshipListComponent } from './starship-list/starship-list.component';

@NgModule({
	declarations: [
		StarshipListComponent
	],
	exports: [
		StarshipListComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	providers: [
		StarshipService
	]
})
export class StarshipModule { }
