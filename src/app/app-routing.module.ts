import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PanierComponent } from './panier/panier.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { CocktailsDetailsComponent } from "./cocktails-container/cocktails-details/cocktails-details.component";

// Creation tableau de routes 
const appRoutes: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    { path: 'panier', component: PanierComponent },
    { path: 'cocktails', component: CocktailsContainerComponent, children: [
        {path: ':index', component: CocktailsDetailsComponent },
        {path: '', component: CocktailsDetailsComponent }
     ]}
];



@NgModule({
    // Passage en routeur natif + precision des racines root
    imports: [ RouterModule.forRoot(appRoutes) ],
    // Export pour un accès router par les autres composants
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}