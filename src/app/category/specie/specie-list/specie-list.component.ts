import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Specie } from '../specie.interface';

@Component({
	selector: 'sw-specie-list',
	templateUrl: './specie-list.component.html'
})
export class SpecieListComponent implements OnInit, OnDestroy {
	@HostBinding('class.page-container') isPage = true;

	public loading = true;
	public specieList: Specie[] = [];
	public title = '';
	private routeDataSubscription: Subscription;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => { this.title = data.title; });

		this.loading = false;
	}

	ngOnDestroy() {
		if (this.routeDataSubscription) {
			this.routeDataSubscription.unsubscribe();
		}
	}
}
