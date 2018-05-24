import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, Params } from "@angular/router";
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  // Déclaration formulaire 
  public cocktailForm: FormGroup;

  public cocktail: Cocktail;

  // Tableau information edition / ajout => paramIndex['clé oui(1) / (0)non', 'Index']
  public paramIndex: number[] = new Array(0,0);

  createCocktail() {

      
      this.cocktailService.addCocktail(this.cocktailForm.value, this.paramIndex);
      console.log(this.cocktailForm.value);
      console.log(this.paramIndex);

    // 
    // this.cocktailService.addCocktail(this.cocktailForm.value);
    // console.log(this.cocktailForm.value);
    
    
  }

  
  

  
  addIngredient() {
    // Indication <FormArray> pour éviter une erreur 
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name:'',
      quantity:''
    }))
  }

  // Initialisation formulaire avec les données 
  initForm(cocktail = {name: '', img: '', desc: '', ingredients: []}) {
    
    this.cocktailForm = this.fb.group({
      name:[cocktail.name, Validators.required],
      img:[cocktail.img, Validators.required],
      desc:cocktail.desc,
      // Création d'un formArray avec formBuilder auquel est passé un tableau de formGroup qui est 
// créé à partir des ingredients de l’objet cocktail.
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({name: ingredient.name, quantity: ingredient.quantity})))
    })

  }



  // Creation instance FormBuilder
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {
    // Initialisation Formulaire au début 
    this.cocktailForm = this.fb.group({
      name:['', Validators.required],
      img:['', Validators.required],
      desc:'',
      ingredients: this.fb.array([])
    })

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
      // Choix du cocktail selon l'index et initialisation du formulaire avec les informations
      // this.cocktail = this.cocktailService.getCocktail(params.index);

      this.cocktailService.getCocktail(params.index).subscribe(cocktails => {
        this.cocktail = cocktails;
        this.initForm(this.cocktail);
        });

        
      this.initForm(this.cocktail);
      // Si il y a un index => Information Edition d'un cocktail, inscrit
      this.paramIndex[0] = 1;
      this.paramIndex[1] = parseInt(params.index, 10);
      } else {
      // Initialisation formulaire sans informations 
      this.initForm();
      // Si il n'y a pas d'index => Information Ajout d'un cocktail, inscrit
      this.paramIndex[0] = 0;
      }
    });
  }

}
