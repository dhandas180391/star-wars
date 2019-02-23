import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageTitleModule } from '../../shared/page-title/page-title.module';

import { SpecieListComponent } from './specie-list/specie-list.component';

@NgModule({
	declarations: [
		SpecieListComponent
	],
	exports: [
		SpecieListComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		PageTitleModule
	]
})
export class SpecieModule { }
