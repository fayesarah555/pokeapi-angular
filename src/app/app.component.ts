import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {AboutComponent} from '../app/about/about.component'
// import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, PokemonListComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pokeapi-angular';
}
