import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/shared/service/storage.service';
import { MyValidators } from 'src/app/setting/utils/validators';
import { ProductService } from 'src/app/shared/service/product.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'form-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  categoryOption: Category[] = [];
  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly storageService: StorageService,
              private readonly productService: ProductService,
              private readonly categoryService: CategoryService,
              private readonly router: Router) { this.buildForm(); }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(resp =>{
      this.categoryOption = resp;
    });
   }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      category_id: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  get priceField() {
    return this.form.get('price');
  }

  get descriptionField() {
    return this.form.get('description');
  }

  get categoryField() {
    return this.form.get('category_id');
  }

  save() {
    if(this.form.valid){
      this.productService.productSave(this.form.value).subscribe(resp =>{
        console.log(resp);
        this.router.navigate(['/admin/product']);
      })
    }else{
      this.form.markAllAsTouched();
    }
  }

  imagenes: any[] = [];
  cargaImagen(event:any){
    let archivo = event.target.files;
    let nombre = 'AaronDelgado';

    // for(let i=0; i < archivo.length; i++ ){ Para subir multiples imágenes.
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre + '_' + Date.now(), reader.result).then(urlImage =>{
        this.imageField?.setValue(urlImage);
      })}
  // }
  }
}