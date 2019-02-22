import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'sw-home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	@HostBinding('class.page-container') isPage = true;

	constructor(private router: Router) { }

	public gotoPage(route: string) {
		this.router.navigate([route]);
	}
}
