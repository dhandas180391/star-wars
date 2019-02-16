import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Film } from './film.interface';

@Injectable()
export class FilmResolver implements Resolve<Film[]> {

	constructor(
		private httpClient: HttpClient
	) { }

	public async resolve(): Promise<Film[]> {
		return await this.getFilms();
	}

	public async getFilms() {
		return this.httpClient.get<Film[]>('/api/films').toPromise()
			.catch((error: HttpErrorResponse) => {
				throw error;
			});
	}
}
