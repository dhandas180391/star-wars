import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CharacterModalComponent } from './character-modal/character-modal.component';
import { Character } from '../category/character/character.interface';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';
import { Planet } from '../category/planet/planet.interface';
import { StarshipModalComponent } from './starship-modal/starship-modal.component';
import { Starship } from '../category/starship/starship.interface';
import { CreditsModalComponent } from './credits-modal/credits-modal.component';

@Injectable()
export class ModalService {
	private modalOpen = false;

	public isModalOpen(): boolean {
		return this.modalOpen;
	}

	constructor(private modalService: NgbModal) { }

	public characterDetails(data: Character) {
		this.modalOpen = true;

		const modal = this.modalService.open(
			CharacterModalComponent,
			{
				backdrop: 'static',
				centered: true,
				windowClass: 'sw-character-modal',
				size: 'lg',
			},
		);

		modal.componentInstance.data = data;

		modal.result
			.then((response) => {
				this.modalOpen = false;
			})
			.catch((response) => {
				this.modalOpen = false;
			});

		return modal.result;
	}

	public planetDetails(data: Planet) {
		this.modalOpen = true;

		const modal = this.modalService.open(
			PlanetModalComponent,
			{
				backdrop: 'static',
				centered: true,
				windowClass: 'sw-planet-modal',
				size: 'lg',
			},
		);

		modal.componentInstance.data = data;

		modal.result
			.then((response) => {
				this.modalOpen = false;
			})
			.catch((response) => {
				this.modalOpen = false;
			});

		return modal.result;
	}

	public starshipDetails(data: Starship) {
		this.modalOpen = true;

		const modal = this.modalService.open(
			StarshipModalComponent,
			{
				backdrop: 'static',
				centered: true,
				windowClass: 'sw-starship-modal',
				size: 'lg',
			},
		);

		modal.componentInstance.data = data;

		modal.result
			.then((response) => {
				this.modalOpen = false;
			})
			.catch((response) => {
				this.modalOpen = false;
			});

		return modal.result;
	}

	public credits() {
		this.modalOpen = true;

		const modal = this.modalService.open(
			CreditsModalComponent,
			{
				backdrop: 'static',
				centered: true,
				windowClass: 'sw-credits-modal',
				size: 'lg',
			},
		);

		modal.result
			.then((response) => {
				this.modalOpen = false;
			})
			.catch((response) => {
				this.modalOpen = false;
			});

		return modal.result;
	}
}
