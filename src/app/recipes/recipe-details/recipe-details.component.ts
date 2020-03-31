import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppingListService';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    // this.shoppingListService.addListOfIngredients(this.recipe.ingredients);
    this.recipeService.addIngredients(this.recipe.ingredients);
  }
}
