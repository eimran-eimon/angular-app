import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input() recipe: { name: string, description: string, imagePath: string};
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  seeDetails() {
    this.recipeService.recipeDetailsEvent.emit(this.recipe);
  }
}
