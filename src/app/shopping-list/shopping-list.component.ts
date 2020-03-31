import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppingListService';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientListChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );
  }

  addIngredient(ingredient: Ingredient) {
    this.shoppingListService.addIngredients(ingredient);
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
