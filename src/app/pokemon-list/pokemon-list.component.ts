import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule], // Add HttpClientModule here
  template: `
   <h2>Pokémon List</h2>
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let pokemon of pokemonList">
          <td>{{ pokemon.name }}</td>
          <td><a [href]="pokemon.url" target="_blank">Details</a></td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./pokemon-list.component.scss'] // Adjust if needed
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    console.log("before",this.pokemonList )
    this.pokemonService.getPokemonList()
      .subscribe(response => {
        this.pokemonList = response.results;
      });
      console.log("after",this.pokemonList )
  }
}
