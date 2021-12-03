import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDescriptionComponent } from './pokemon-description/pokemon-description.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokemonsPageComponent,
    PokemonListComponent,
    PokemonDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
