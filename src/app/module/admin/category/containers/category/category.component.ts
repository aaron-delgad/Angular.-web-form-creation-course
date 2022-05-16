import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'form-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly categoryService: CategoryService,
              private readonly router: Router,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      if(params.id){
        this.getCategory(params.id);
      }

    });
  }

  createCategory(data) {
    this.categoryService.createCategory(data).subscribe(resp =>{
      this.router.navigate(['./admin'])
    });
  }

  updateCategory(data) {
    this.categoryService.updateCategory(this.category._id ,data).subscribe(resp =>{
      this.router.navigate(['./admin'])
    });
  }

  private getCategory(id: string) {
    this.categoryService.getCatefory(id).subscribe(resp =>{
      this.category = resp;
    })
  }

}
