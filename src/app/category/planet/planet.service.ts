import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planet } from './planet.interface';

@Injectable()
export class PlanetService {
	constructor(
		private httpClient: HttpClient,
	) { }

	getPlanets(): Promise<{ count: number; next: string; previous: string | null; results: Planet[] }> {
		return this.httpClient.get<{ count: number; next: string; previous: string | null; results: Planet[] }>('/api/planets').toPromise()
			.catch((error) => {
				throw error;
			});
	}
}
