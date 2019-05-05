import { Component, OnInit } from '@angular/core';
import { Ingredent } from 'src/app/shared/ingredent.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingerdents: Ingredent[] = [
  new Ingredent ('Apple', 5),
  new Ingredent ('Apple', 5)
];

  constructor() { }

  ngOnInit() {
  }

}
