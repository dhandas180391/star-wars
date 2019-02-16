import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './character.interface';

@Injectable()
export class CharacterService {
	constructor(
		private httpClient: HttpClient,
	) { }

	getCharacters(): Promise<{ count: number; next: string; previous: string | null; results: Character[] }> {
		return this.httpClient.get<{ count: number; next: string; previous: string | null; results: Character[] }>('/api/people').toPromise()
			.catch((error) => {
				throw error;
			});
	}
}
