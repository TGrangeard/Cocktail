import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(cocktails:Cocktail[], recherche: string): Cocktail[] | null {
    // Si recherche non defini => On affiche tous les cocktails 
    if (!recherche.length) {
    return cocktails;
    } else {
      // Sinon on affiche les cocktails contenant la chaine de caractères recherche
    return cocktails.filter(cocktail =>
    cocktail.name.toLowerCase().includes(recherche.toLowerCase()) );
    }
  }

}
