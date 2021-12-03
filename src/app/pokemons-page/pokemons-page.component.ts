import { Component, OnInit } from '@angular/core';
import { PokemonDescriptionComponent } from '../pokemon-description/pokemon-description.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';


@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.css']
})
export class PokemonsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
