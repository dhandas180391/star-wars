import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, isEmpty } from 'lodash';

import { ModalService } from '../../modal/modal.service';
import { SpecieService } from '../specie/specie.service';

import { Film } from './film.interface';
import { CharacterService } from '../character/character.service';
import { Character } from '../character/character.interface';

@Component({
	selector: 'sw-film',
	templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit, OnDestroy {
	@HostBinding('class.page-container') isPage = true;

	public title = '';
	public films: Film[] = [];
	private routeDataSubscription: Subscription;
	private characters: Character[] = [];
	private species: any[] = [];

	constructor(
		private route: ActivatedRoute,
		private characterService: CharacterService,
		private modalService: ModalService,
		private specieService: SpecieService,
	) { }

	async ngOnInit() {
		this.routeDataSubscription = this.route.data.subscribe((data) => {
			if (data.title) {
				this.title = data.title;
			}

			if (data.films) {
				this.films = data.films.results;
			}
		});

		await this.characterService.getCharacters()
			.then((response) => { this.characters = response.results; });

		await this.specieService.getSpecies()
			.then((response) => { this.species = response.results; });
	}

	ngOnDestroy() {
		if (this.routeDataSubscription) {
			this.routeDataSubscription.unsubscribe();
		}
	}

	public getCharacterName(url: string): string | undefined {
		const character = filter(this.characters, (c) => c.url === url);
		if (!isEmpty(character)) {
			return character[0].name;
		}
		return undefined;
	}

	public async viewDetails(url: string) {
		const character = await this.characterService.getCharacter(url);
		return this.modalService.characterDetails(character).catch(() => {});
	}

	public getSpecieName(url: string): string | undefined {
		const specie = filter(this.species, (s) => s.url === url);
		if (!isEmpty(specie)) {
			return specie[0].name;
		}
		return undefined;
	}
}
