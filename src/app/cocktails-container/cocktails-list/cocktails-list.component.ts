import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from "../../shared/cocktail.model";

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

// Récupération du cocktail sur le parent
@Input() cocktails: Cocktail[];

@Output() pickEvent: EventEmitter<number> = new EventEmitter<number>();

pickCocktail(index: number): void {
  // Emission de l'index à chaque appel de la methode
  this.pickEvent.emit(index);
}



  

  constructor() { }

  ngOnInit() {
  }

}
