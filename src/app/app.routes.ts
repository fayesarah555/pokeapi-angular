import { Routes } from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component'
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
    {path: 'pokemon', component: PokemonListComponent, title:'Liste des pokemons'},
     { path: 'pokemon-detail', component: PokemonDetailComponent },
     { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' }
];
