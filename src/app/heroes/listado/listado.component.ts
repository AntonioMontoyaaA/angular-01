import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log("En el constructor");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  heroes: string[] = ['Spiderman', 'Goku', 'Antonio', 'Juan'];
  heroe:string = '';

  borrarHeroe() {
    console.log("borrando...");
    //this.heroes = this.heroes.splice(this.heroes.length - 1, 1);
    const heroeBorrado = this.heroes.shift();
    this.heroe = heroeBorrado?heroeBorrado:'...';
    console.log(heroeBorrado);
  }


}
