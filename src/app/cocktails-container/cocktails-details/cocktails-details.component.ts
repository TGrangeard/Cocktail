import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from "../../shared/models/cocktail.model";
import { CocktailService } from "../../shared/services/cocktail.service";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";


@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

  public cocktail:Cocktail;
  public index:number;

  getUrl() {
    return '/cocktails/' + this.index + '/edit';
    }

  // public cocktail = new Cocktail('Mojito', 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/09/mojito-1.jpg', 'Le mojito, prononcé en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910.');
  
  constructor(private activatedRoute: ActivatedRoute , private cocktailService: CocktailService) { }

  ngOnInit() {
    // Souscription à l'observable 'cocktail' de type behavior retournant un Cocktail 'cocktail'    
    // this.cocktailService.cocktail.subscribe((cocktail:Cocktail) => this.cocktail = cocktail);

    // Souscription pour envoyer l'index à la méthode cocktail / index récupéré sur list html ([routerLink]='index')
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   if(params.get('index')) {
    //     this.cocktail = this.cocktailService.getCocktail(params.get('index'));
    //   }else{
    //     this.cocktail = this.cocktailService.cocktails.value[0];
    //   }
    // });

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
      this.index = params.index;
      } else {
      this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe(cocktails => this.cocktail =
      cocktails);
      });
  }

}
