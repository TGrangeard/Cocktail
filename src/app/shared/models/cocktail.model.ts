import { Ingredient } from './ingredient.model';

export class Cocktail {
    // public name: string;
    // public img: string;
    // public desc: string;
    // ingredients:Ingredient[];

    constructor(
        public name: string, 
        public img: string, 
        public desc: string, 
        public ingredients:Ingredient[]) {
    // this.name = name;
    // this.img = img;
    // this.desc = desc;
    }
}