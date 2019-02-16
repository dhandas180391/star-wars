import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship } from './starship.interface';

@Injectable()
export class StarshipService {
	constructor(
		private httpClient: HttpClient,
	) { }

	getStarships(): Promise<{ count: number; next: string; previous: string | null; results: Starship[] }> {
		return this.httpClient.get<{ count: number; next: string; previous: string | null; results: Starship[] }>('/api/starships').toPromise()
			.catch((error) => {
				throw error;
			});
	}
}
