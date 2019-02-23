import { Component } from '@angular/core';

import { ModalService } from '../../modal/modal.service';

@Component({
	selector: 'sw-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent {
	public year: Date = new Date();

	constructor(private modalService: ModalService) { }

	public viewCredits(): Promise<any> {
		return this.modalService.credits();
	}
}
