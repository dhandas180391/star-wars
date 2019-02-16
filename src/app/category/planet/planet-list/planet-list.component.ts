import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ModalService } from '../../../modal/modal.service';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet.interface';

@Component({
	selector: 'sw-planet-list',
	templateUrl: './planet-list.component.html'
})
export class PlanetListComponent implements OnInit, OnDestroy {
	public loading: boolean = true;
	public planetList: Planet[] = [];
	public title: string = '';
	private routeDataSubscription: Subscription;

	constructor(
		private planetService: PlanetService,
		private modalService: ModalService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => { this.title = data.title; });

		this.planetService.getPlanets()
			.then((response) => {
				this.planetList = response.results;
				this.loading = false;
			});
	}

	ngOnDestroy() {
		if (this.routeDataSubscription)
			this.routeDataSubscription.unsubscribe();
	}

	public viewDetails(data: Planet) {
		return this.modalService.planetDetails(data);
	}
}
