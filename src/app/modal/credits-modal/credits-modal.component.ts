import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { credits as creditsData } from './credits';
import { Credit } from './credit.interface';

@Component({
	selector: 'sw-credits-modal',
	templateUrl: './credits-modal.component.html'
})
export class CreditsModalComponent implements OnInit {
	public credits: Credit[] = [];

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.credits = creditsData;
	}
}
