import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
  // les cocktails
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

}