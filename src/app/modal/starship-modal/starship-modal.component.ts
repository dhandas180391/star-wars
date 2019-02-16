import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Starship } from '../../category/starship/starship.interface';

@Component({
	selector: 'sw-starship-modal',
	templateUrl: './starship-modal.component.html'
})
export class StarshipModalComponent {
	@Input() data: Starship;

	constructor(public activeModal: NgbActiveModal) { }
}
