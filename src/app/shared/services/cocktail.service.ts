import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from "../models/ingredient.model";

@Injectable()
export class CocktailService {

  // Premier observable qui renverra un tableau comme données
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
  // les cocktails
  // new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', "Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910."),
  // new Cocktail('Margarita','https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', "La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila." ),
  // new Cocktail('Sour', 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', "Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d'Amérique . C'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l'eau gazeuse à ceci le transforme en un gin fizz .")
  
  {name: 'Mojito', img: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', desc:'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.', ingredients:[{name: 'perrier', quantity:1}, {name: 'menthe', quantity:1}]},
  {name: 'Margarita', img: 'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg', desc:'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila.', ingredients:[{name: 'citron vert', quantity:1}, {name: 'tequila', quantity:3}]},
  {name: 'Sour', img: 'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', desc:'Le Gin Sour est un cocktail mixte traditionnel qui précède la prohibition aux États-Unis d\'Amérique . C\'est une combinaison simple de gin, de jus de citron et de sucre. Ajouter de l\'eau gazeuse à ceci le transforme en un gin fizz .', ingredients:[{name: 'Bourbon', quantity:2}, {name: 'Citron', quantity:1}]}

]);

  // Deuxième observable qui renvoie un cocktail avec une instance
  // public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  // selectCocktail(index: number) {
    // Utilisation de la méthode next afin de passer une nouvelle valeur au BehaviorSubject
    // this.cocktail.next(this.cocktails.value[index]);
  // }

  // Choix d'un élément du tableau avec l'index 
  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail, paramIndex: number[]) {
    // Utilisation slice pour eviter une copie par référence 
  
  if (paramIndex[0] === 1) {
    console.log(this.cocktails.value[paramIndex[1]]);
    
    this.cocktails.value[paramIndex[1]] = {name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients};
  } else {
    const cocktails = this.cocktails.value.slice();
    cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients})
    this.cocktails.next(cocktails);
  }
  // cocktails.push({name: cocktail.name, img: cocktail.img, desc: cocktail.desc, ingredients: cocktail.ingredients})
  // this.cocktails.next(cocktails);
}

  constructor() { }

}