import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingListService';

@Injectable()
export class RecipeService {
  recipeDetailsEvent = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Air-Fryer Salmon with Maple-Dijon',
      'Being landlocked in the Midwest, my kids always thought they disliked fish. This air-fryer salmon definitely changed their minds!',
      'https://www.tasteofhome.com/wp-content/uploads/2020/03/Air-Fryer-Maple-Dijon-Salmon_EXPS_FT20_250682_F_0219_1-696x696.jpg',
      [
        new Ingredient('tablespoons butter', 3),
        new Ingredient('salmon fillets (4 ounces each)', 4)
      ]),

    new Recipe('Air-Fryer Red Potatoes',
      'Roasting is one of my favorite ways to prepare veggies. Some fragrant rosemary, fresh or dried, gives these air-fryer red potatoes a distinctive but subtle taste.',
      'https://www.tasteofhome.com/wp-content/uploads/2020/03/EXPS_H13x9BKZ16_4221__D05_06_3b_basedon-696x696.jpg',
      [
        new Ingredient('pounds small unpeeled red potatoes, cut into wedges', 2),
        new Ingredient('garlic cloves, minced', 4)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addListOfIngredients(ingredients);
  }
}
