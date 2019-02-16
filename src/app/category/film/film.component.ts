import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Film } from './film.interface';

@Component({
	selector: 'sw-film',
	templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit, OnDestroy {
	public title: string = '';
	public films: Film[] = [];
	private routeDataSubscription: Subscription;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => {
			if(data.title) {
				this.title = data.title;
			}

			if (data.films) {
				this.films = data.films.results;
			}
		});
	}

	ngOnDestroy() {
		if (this.routeDataSubscription) {
			this.routeDataSubscription.unsubscribe();
		}
	}
}
