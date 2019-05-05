import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'This is simply a test',
      'https://images-gmi-pmc.edge-generalmills.com/e44ed3f2-ae5d-4c36-9390-8c6a79869efa.jpg',
      ),
      new Recipe('Test Recipe',
      'This is simply a test',
      'https://images-gmi-pmc.edge-generalmills.com/e44ed3f2-ae5d-4c36-9390-8c6a79869efa.jpg',
      )
  ];

  constructor() { }

  ngOnInit() {
  }

}
