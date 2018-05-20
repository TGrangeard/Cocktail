import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  // Création de variable modifiant le background et le color 
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  // Récupère true ou false 
  // @Input('appActive') isActive: boolean;

  // Reception resultat du appActive dans 'condition' (true or false) grâce à set 
  @Input('appActive') set isActive(condition) {
    // Si c'est vrai => background bleu et texte blanc
    if (condition) {
      this.backgroundColor = '#3498db';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }




  constructor() { }

}
