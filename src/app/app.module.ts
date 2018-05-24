import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { FiltrePipe } from './shared/pipes/filtre.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent,
    HeaderComponent,
    CocktailsContainerComponent,
    ActiveDirective,
    CocktailEditComponent,
    PanierComponent,
    IngredientsListComponent,
    FiltrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
