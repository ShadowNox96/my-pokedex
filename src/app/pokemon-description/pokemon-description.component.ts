import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent implements OnInit, OnChanges {
  @Input() id = 0;
  public pokemon: any;

  constructor(public services: ConfigService) { }

  ngOnInit(): void {
    this.getPokemon(this.id)
  }
  getPokemon(id: number) {
    this.services.getPokemonById(id).subscribe(item => {
      this.pokemon = item;
    },
    error => console.log(error))
  }

  /**
   * Catch the components changes
   */
  ngOnChanges() {
    this.getPokemon(this.id);
  }

}
