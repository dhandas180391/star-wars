import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ModalService } from '../../../modal/modal.service';

import { StarshipService } from '../starship.service';
import { Starship } from '../starship.interface';

@Component({
	selector: 'sw-starship-list',
	templateUrl: './starship-list.component.html'
})
export class StarshipListComponent implements OnInit, OnDestroy {
	public loading: boolean = true;
	public starshipList: Starship[] = [];
	public title: string = '';
	private routeDataSubscription: Subscription;

	constructor(
		private starshipService: StarshipService,
		private modalService: ModalService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => { this.title = data.title; });

		this.starshipService.getStarships()
			.then((response) => {
				this.starshipList = response.results;
				this.loading = false;
			});
	}

	ngOnDestroy() {
		if (this.routeDataSubscription)
			this.routeDataSubscription.unsubscribe();
	}

	public viewDetails(data: Starship) {
		return this.modalService.starshipDetails(data);
	}
}
