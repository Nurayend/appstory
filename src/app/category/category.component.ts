import { Component, OnInit } from '@angular/core';

import { categories } from '../categories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = categories;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // // Find the product that correspond with the id provided in route.
    // this.product = products.find(product => product.id === productIdFromRoute);
  }

}