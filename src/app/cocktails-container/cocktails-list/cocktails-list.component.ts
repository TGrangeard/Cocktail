import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from "../../shared/models/cocktail.model";
import { CocktailService } from "../../shared/services/cocktail.service";

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  activeCocktail: number;
  
// Récupération du cocktail sur le parent
@Input() cocktails: Cocktail[];

@Output() pickEvent: EventEmitter<number> = new EventEmitter<number>();

pickCocktail(index: number): void {

  this.activeCocktail = index;
  // Emission de l'index à chaque appel de la methode
  this.pickEvent.emit(index);
}

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  }

}
