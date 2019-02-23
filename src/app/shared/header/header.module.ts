import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuModule } from '../menu/menu.module';

import { HeaderComponent } from './header.component';

@NgModule({
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	imports: [
		CommonModule,
		MenuModule,
		RouterModule
	]
})
export class HeaderModule { }
