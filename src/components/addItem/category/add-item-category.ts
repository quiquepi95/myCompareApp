import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { ListCocheOption } from '../../../interfaces/lista';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  category: string;
  lista: ListCocheOption;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.category = this.navParams.get('cat').toUpperCase();
  }
  
  ngOnInit(){
    this.lista = {
      "categoria": this.category,
    };
    console.log(this.lista);
    
    console.log(this.category);
    
  }

  logForm() {
    console.log(this.lista);
  }

  goBack(){
    this.navCtrl.pop();
  }
  
}