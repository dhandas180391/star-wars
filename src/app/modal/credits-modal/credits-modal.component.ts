import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'sw-credits-modal',
	templateUrl: './credits-modal.component.html'
})
export class CreditsModalComponent {
	constructor(public activeModal: NgbActiveModal) { }
}
