import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public listPokemons: any;
  public offset: number = 0;
  public emitPokemonId: number = 0;
  constructor(public services: ConfigService) {}



  ngOnInit(): void {
    this.getPokemons();
  }

  emitId(id: number) {
    this.emitPokemonId = id;
  }

  getPokemons () {
    this.services.getPokemons(this.offset).subscribe(
      (items) => {
        this.listPokemons = items;
        console.log(this.listPokemons)
      },
      (error) => console.log(error)
    );
  }

  nextListOfPokemons() {
    this.offset += 5;
  }
  previousListOfPokemons() {
    this.offset -= 5;
  }
}
