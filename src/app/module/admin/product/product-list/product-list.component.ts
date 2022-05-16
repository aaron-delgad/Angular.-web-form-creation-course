import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'form-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productAll().subscribe(resp =>{
      this.products = resp;
    });
  }

}
