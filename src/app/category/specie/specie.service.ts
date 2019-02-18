import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpecieService {
	constructor(
		private httpClient: HttpClient,
	) { }

	getSpecies(): Promise<any> {
		return this.httpClient.get<any>('/api/species').toPromise()
			.catch((error) => {
				throw error;
			});
	}
}
