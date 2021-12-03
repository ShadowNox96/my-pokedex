import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent implements OnInit, OnChanges {
  @Input() id = 0;

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * Catch the components changes
   */
  ngOnChanges() {

  }

}
