import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'form-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {this.buildForm(); }

  ngOnInit(): void {
    this.nameField!.valueChanges.subscribe(value =>{
      console.log(value);
    });
  }

   //valueChange es un observable que me permite mantenerme escuchando los cambios
   getNameValue(){
    console.log(this.nameField!.value);
  }

  save(event: any){
    if(this.form.valid){
    console.log(this.form.value);
    }else{
      this.form.markAllAsTouched();
    }

  }

  private buildForm(){
    this.form = this.formBuilder.group ({
      fullName: this.formBuilder.group ({
        name: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
        last: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: ['18', [Validators.required, Validators.min(18), Validators.max(100)]],
      range: [''],
      url: [''],
      textarea: [''],
      select: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  get nameField(){
    return this.form.get('fullName.name');
  }

  get lastField(){
    return this.form.get('fullName.last');
  }

  get emailField(){
    return this.form.get('email');
  }

  get phoneField(){
    return this.form.get('phone');
  }

  get colorField(){
    return this.form.get('color');
  }

  get dateField(){
    return this.form.get('date');
  }

  get ageField(){
    return this.form.get('age');
  }

  get rangeField(){
    return this.form.get('range');
  }

  get urlField(){
    return this.form.get('url');
  }

  get textareaField(){
    return this.form.get('textarea');
  }

  get selectField(){
    return this.form.get('select');
  }

  get tagField(){
    return this.form.get('tag');
  }

  get agreeField(){
    return this.form.get('agree');
  }

  get genderField(){
    return this.form.get('gender');
  }

  get zoneField(){
    return this.form.get('zone');
  }

  get isNameFieldValid(){
    return this.nameField!.touched && this.nameField!.valid;
  }

  get isNameFieldInvalid(){
    return this.nameField!.touched && this.nameField!.invalid;
  }

  get isLastFieldInvalid(){
    return this.lastField!.touched && this.lastField!.invalid;
  }

  get isLastFieldValid(){
    return this.lastField!.touched && this.lastField!.valid;
  }

  get isEmailFieldInvalid(){
    return this.emailField!.touched && this.emailField!.invalid;
  }

  get isEmailFieldValid(){
    return this.emailField!.touched && this.emailField!.valid;
  }

  get isPhoneFieldInvalid(){
    return this.phoneField!.touched && this.phoneField!.invalid;
  }

  get isPhoneFieldValid(){
    return this.phoneField!.touched && this.phoneField!.valid;
  }
  get isAgeFieldInvalid(){
    return this.ageField!.touched && this.ageField!.invalid;
  }

  get isAgeFieldValid(){
    return this.ageField!.touched && this.ageField!.valid;
  }

}
