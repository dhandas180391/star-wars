import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
		MenuModule
	]
})
export class HeaderModule { }
