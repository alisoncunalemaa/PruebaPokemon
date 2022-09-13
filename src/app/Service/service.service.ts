import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemon1 } from '../Modelo/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  url_cons='https://bp-pokemons.herokuapp.com/?idAuthor=1';
  url_getid="https://bp-pokemons.herokuapp.com/";
  url_act="https://bp-pokemons.herokuapp.com/";
  url_create="https://bp-pokemons.herokuapp.com/?idAuthor=";
  getpokemons(){
    return this.http.get<Pokemon1[]>(this.url_cons);
  }

  getpokemonsid(id:number){
    console.log(this.url_getid+id)
    return this.http.get<Pokemon1[]>(this.url_getid+id);
  }
  updatepokemon(pokemon:any){
    console.log(pokemon)
    
    return this.http.put<Pokemon1>(this.url_act+pokemon.id,pokemon)
  }
  createpokemon(pokemon:any){
    console.log("servicio")
    
    //pokemon= [pokemon];
    console.log(pokemon)
    return this.http.post<Pokemon1>(this.url_create+pokemon.idAuthor,pokemon)
  } 
  deletepokemon(pokemon:any){
    console.log(pokemon)
    
    return this.http.delete<Pokemon1>(this.url_act+pokemon.id,pokemon)
  }
}
