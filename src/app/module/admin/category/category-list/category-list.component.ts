import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../../shared/service/category.service';
import { Category } from './../../../../shared/models/category.model';


@Component({
  selector: 'form-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(resp =>{
      this.categories = resp;
    })
  }



}
