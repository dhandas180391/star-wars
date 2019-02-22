import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Starship } from '../../category/starship/starship.interface';

@Component({
	selector: 'sw-starship-modal',
	templateUrl: './starship-modal.component.html'
})
export class StarshipModalComponent implements OnInit {
	@Input() data: Starship;

	public loading = true;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.loading = false;
	}
}
