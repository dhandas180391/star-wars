import { Component } from '@angular/core';

import { ModalService } from '../../modal/modal.service';

@Component({
	selector: 'sw-menu',
	templateUrl: './menu.component.html'
})
export class MenuComponent {
	constructor(
		private modalService: ModalService
	) { }

	public viewCredits() {
		return this.modalService.credits();
	}
}
