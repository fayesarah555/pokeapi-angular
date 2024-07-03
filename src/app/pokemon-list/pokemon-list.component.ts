import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add HttpClientModule here
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
          <td>
           <button> <a routerLink="/pokemon-detail">View Details </a></button>
          </td>
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
        console.log("la reponse ",response.results )
        this.pokemonList = response.results;
      });
      console.log("after",this.pokemonList )
  }
  getPokemonDetails(name: string): void {
    console.log("before2",this.pokemonList )
    this.pokemonService.getPokemonDetails(name)
      .subscribe(detail => {
        console.log("le detail normalement",detail); 
      });
  }
  
}
