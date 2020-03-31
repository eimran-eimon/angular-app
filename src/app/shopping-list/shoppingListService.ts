import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientListChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Oranges', 24)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientListChanged.emit(this.ingredients.slice());
  }

  addListOfIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientListChanged.emit(this.ingredients.slice());
  }

}
