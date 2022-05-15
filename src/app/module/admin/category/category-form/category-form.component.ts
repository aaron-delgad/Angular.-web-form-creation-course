import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MyValidators } from 'src/app/setting/utils/validators';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { StorageService } from './../../../../shared/service/storage.service';


@Component({
  selector: 'form-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form!: FormGroup;
  isNew = true;

  @Input()
    set category(data: Category){
      if(data){
      this.isNew = false;
      this.form.patchValue(data);
      this.form.get('name').setAsyncValidators(MyValidators.validateCategory(this.categoryService));
    }};
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();


  constructor(private readonly formBuilder: FormBuilder,
              private readonly storageService: StorageService,
              private readonly categoryService: CategoryService,
              ) { this.buildForm(); }

  ngOnInit(): void {  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  save() {
    if(this.form.valid){
      if(this.isNew){
        this.create.emit(this.form.value);
      }else{
        this.update.emit(this.form.value);
      }
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
      console.log(reader.result);
      this.imagenes.push(reader.result);
      this.storageService.subirImagen(nombre + '_' + Date.now(), reader.result).then(urlImage =>{
        console.log('3    '+urlImage);
        this.imageField?.setValue(urlImage);
      })}
  // }
  }

}
