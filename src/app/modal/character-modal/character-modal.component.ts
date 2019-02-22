import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Character } from '../../category/character/character.interface';

@Component({
	selector: 'sw-character-modal',
	templateUrl: './character-modal.component.html'
})
export class CharacterModalComponent implements OnInit {
	@Input() data: Character;

	public loading = true;

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {
		this.loading = false;
	}
}
