import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , RouterLink} from '@angular/router';
import { PokemonService } from '../pokemon.service';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  standalone:true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonName = params['name'];
      console.log("le name la ",pokemonName)
      if (pokemonName) {
        this.getSinglePokemon(pokemonName);
      } else {
        console.error('No name found in route parameters');
      }
    });
  }

  async getSinglePokemon(name: string) {
    try {
      this.pokemon = await this.pokemonService.getPokemonByName(name);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
      // Handle error as per your application's requirements
    }
  }
}