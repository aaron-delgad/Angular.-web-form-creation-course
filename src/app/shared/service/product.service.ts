import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = environment.url_api;

  constructor(private readonly httpClient: HttpClient) { }

  productAll(){
    return this.httpClient.get<Product[]>(`${this.productUrl}/products`);
  }

  productSave(body: Product){
    return this.httpClient.post(`${this.productUrl}/products`,body);
  }
}
