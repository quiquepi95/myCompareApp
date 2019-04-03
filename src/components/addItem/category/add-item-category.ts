import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  category: string = '';
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public formBuilder: FormBuilder)
              {
                this.myForm = this.createMyForm();
              }
  
  ngOnInit(){
    this.category = this.navParams.get('cat').toUpperCase();
    console.log(this.category);
    
  }

  logForm() {
    console.log(this.myForm.value);
  }

  createMyForm(){
    return this.formBuilder.group({
      categoria: ['', Validators.required],
      subcategoria: ['', Validators.required],
    });
  }

  // passwordRetry: this.formBuilder.group({
  //   password: ['', Validators.required],
  //   passwordConfirmation: ['', Validators.required]
  // })

  goBack(){
    this.navCtrl.pop();
  }
  
}