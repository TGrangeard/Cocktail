import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from "../../shared/models/cocktail.model";
import { CocktailService } from "../../shared/services/cocktail.service";


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  cocktails: Cocktail[];
  activeCocktail: number;
  recherche: string = '';

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    // Souscription à l'observable 'cocktails' de type behavior retournant un tableau 'cocktails'
    this.cocktailService.cocktails.subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }

  // pickCocktail(index: number): void {
  //   this.activeCocktail = index;
  //   // Methode du service cocktail
  //   this.cocktailService.selectCocktail(index);
  // }

}
