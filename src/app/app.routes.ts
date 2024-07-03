import { Routes } from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component'


export const routes: Routes = [
    {path: 'pokemon', component: PokemonListComponent},
    // {path: 'todo-list/:id', component: SingleTodoComponent}
];
