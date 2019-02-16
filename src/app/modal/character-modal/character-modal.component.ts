import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Character } from '../../category/character/character.interface';

@Component({
	selector: 'sw-character-modal',
	templateUrl: './character-modal.component.html'
})
export class CharacterModalComponent {
	@Input() data: Character;

	constructor(public activeModal: NgbActiveModal) { }
}
