import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe(
        'burger',
        'this is a description of test recipe',
        'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        [
          new Ingredient('meet',10),
          new Ingredient('French Fries',300)
        ]
      ),
      new Recipe(
        'aaloo paratha',
        'this is a description of test recipe',
        'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        [
          new Ingredient('potatos',10),
          new Ingredient('onions',300),
          new Ingredient('garam masala',40)
        ]
      ),
      new Recipe(
        'panipuri',
        'this is a description of test recipe',
        'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        [
          new Ingredient('puri',120),
          new Ingredient('potato',300),
          new Ingredient('water',40)
        ]
      ),
    ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
