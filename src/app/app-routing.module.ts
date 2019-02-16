import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './category/character/character-list/character-list.component';
import { PlanetListComponent } from './category/planet/planet-list/planet-list.component';
import { StarshipListComponent } from './category/starship/starship-list/starship-list.component';
import { FilmComponent } from './category/film/film.component';

import { FilmResolver } from './category/film/film-resolver.service';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'characters', component: CharacterListComponent, data: { title: 'Characters' } },
	{ path: 'planets', component: PlanetListComponent, data: { title: 'Planets' } },
	{ path: 'starships', component: StarshipListComponent, data: { title: 'Starships' } },
	{ path: 'films', component: FilmComponent, data: { title: 'Films' }, resolve: { films: FilmResolver } }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
