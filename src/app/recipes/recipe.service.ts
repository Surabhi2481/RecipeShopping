import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Burger',
        'Chicken Burger with loaded extra cheese',
        'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        [
            new Ingredient('Bun', 2),
            new Ingredient('Chicken',2),
            new Ingredient('Cheese',2)
        ]),
        new Recipe('Chicken Pizza',
        'Pizza with extra loaded cheese and chicken',
        'https://images.unsplash.com/photo-1566200435200-2efa936731fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        [
            new Ingredient('Pizza Base',1),
            new Ingredient('Chcken Sausage',10),
            new Ingredient('Cheese',4)
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}