import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../app/Service/service.service'
import { Pokemon1 } from './Modelo/pokemon';;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebacunalema';

  pokemons: Pokemon1[] = [];
  pokemonsEdit:any;
  name:any;
  image:any;
  attack:any;
  defense:any;
  valorchange:number=100;
  lispoke={
    id:0,
    name:"",
    image:"",
    attack:0,
    defense:0,
    hp:0,
    type:"",
    idAuthor:0
  }
  lispokeg={
    id:0,
    name:"",
    image:"",
    attack:0,
    defense:0,
    hp:0,
    type:"",
    idAuthor:0
  }
  searchText: any;
  lispoke2=[];
  nuevoel:boolean=false;
  constructor(private service:ServiceService, private router:Router){

  }
  ngOnInit(){
    this.service.getpokemons().subscribe(data=>{
      this.pokemons=data;
      console.log(this.pokemons);
    })

    
  }

  onInputChange(newval:any){
    console.log(newval)
    this.valorchange=newval;
  }
  editar(id:any){
    
    console.log(id);
    this.service.getpokemonsid(id).subscribe(data=>{
      this.pokemonsEdit=data;
      this.lispoke= this.pokemonsEdit;
     
     // console.log(this.pokemonsEdit)
    })
    
  }
  actualizar(lispokemon:any){
    
      console.log(lispokemon);
      var id_poke=parseInt(lispokemon.id)+50;
      this.lispokeg.attack=lispokemon.attack;
      this.lispokeg.defense=lispokemon.defense;
      this.lispokeg.name=lispokemon.name;
      this.lispokeg.id=lispokemon.id ;
      this.lispokeg.idAuthor=1;
      this.lispokeg.image=lispokemon.image;
      this.lispokeg.type="GEN";
      this.lispokeg.hp=200;
      this.service.updatepokemon(this.lispokeg).subscribe(data=>{
       
        console.log(data);
        if(data){
          alert("actualizado")
          location.reload();
        }
        
      })
     
  }
  nuevo(){
    this.router.navigate(["agregar"])
  }
  guardar(){
    this.nuevoel=true;
  }
  crear(pokemons:Pokemon1){
    console.log("guardar");

    pokemons.idAuthor=1;
    pokemons.id=59;
    pokemons.type="al type"
    console.log(pokemons);
    this.service.createpokemon(pokemons).subscribe(data=>{
       
      console.log(data);
      if(data){
        alert("creado")
        this.nuevoel=false;
        location.reload();
      }
      
    })
  }
  delete(lispokemon:any){
      this.lispokeg.attack=lispokemon.attack;
      this.lispokeg.defense=lispokemon.defense;
      this.lispokeg.name=lispokemon.name;
      this.lispokeg.id=lispokemon.id ;
      this.lispokeg.idAuthor=1;
      this.lispokeg.image=lispokemon.image;
      this.lispokeg.type="GEN";
      this.lispokeg.hp=200;
      this.service.deletepokemon(this.lispokeg).subscribe(data=>{
       
        console.log(data);
        if(data){
          alert("eliminado")
          location.reload();
        }
        
      })
  }
}
