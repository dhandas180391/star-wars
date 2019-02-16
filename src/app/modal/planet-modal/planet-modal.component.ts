import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Planet } from '../../category/planet/planet.interface';

@Component({
	selector: 'sw-planet-modal',
	templateUrl: './planet-modal.component.html'
})
export class PlanetModalComponent {
	@Input() data: Planet;

	constructor(public activeModal: NgbActiveModal) { }
}
