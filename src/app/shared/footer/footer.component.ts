import { Component } from '@angular/core';

import { ModalService } from '../../modal/modal.service';

@Component({
	selector: 'sw-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent {
	public year = new Date();

	constructor(private modalService: ModalService) { }

	public viewCredits() {
		return this.modalService.credits();
	}
}
