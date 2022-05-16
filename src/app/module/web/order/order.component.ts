import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../../shared/models/product.model';
import { CartService } from './../../../shared/service/cart.service';
import { FormGroup, FormBuilder, ValidationErrors, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'form-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  form: FormGroup;

  constructor(private cartService: CartService,
              private readonly formBuilder: FormBuilder) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: this.formBuilder.array([])
    });
  }

  AddAddressField(){
    
  }

  get address(){
    return this.form.get('address') as FormArray;
  }

}
