import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingListService';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('nameAmount') amount: ElementRef;
  @Output() addIngredientEvent = new EventEmitter<Ingredient>()
  private ingredientAmount: number;
  private ingredientName: string;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {}

  addIngredient() {
    // console.log(this.ingredientAmount.nativeElement.value + '' + this.ingredientName.nativeElement.value);
    this.ingredientAmount = this.amount.nativeElement.value;
    this.ingredientName = this.name.nativeElement.value;
    this.shoppingListService.addIngredients(new Ingredient(this.ingredientName, this.ingredientAmount));
    // this.addIngredientEvent.emit(new Ingredient(this.ingredientName, this.ingredientAmount));
  }
}
