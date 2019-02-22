import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Planet } from '../../category/planet/planet.interface';

@Component({
	selector: 'sw-planet-modal',
	templateUrl: './planet-modal.component.html'
})
export class PlanetModalComponent implements OnInit {
	@Input() data: Planet;

	public loading = true;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.loading = false;
	}
}
