import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ModalService } from '../../../modal/modal.service';

import { CharacterService } from '../character.service';
import { Character } from '../character.interface';

@Component({
	selector: 'sw-character-list',
	templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit, OnDestroy {
	@HostBinding('class.page-container') isPage = true;

	public loading = true;
	public characterList: Character[] = [];
	public title = '';
	private routeDataSubscription: Subscription;

	constructor(
		private characterService: CharacterService,
		private modalService: ModalService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => { this.title = data.title; });

		this.characterService.getCharacters()
			.then((response) => {
				this.characterList = response.results;
				this.loading = false;
			});
	}

	ngOnDestroy() {
		if (this.routeDataSubscription) {
			this.routeDataSubscription.unsubscribe();
		}
	}

	public viewDetails(data: Character): Promise<any> {
		return this.modalService.characterDetails(data);
	}
}
