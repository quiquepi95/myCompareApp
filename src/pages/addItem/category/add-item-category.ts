import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  category: string = '';
  constructor(private navParams: NavParams){
    
  }
  
  ngOnInit(){
    this.category = this.navParams.get('cat');
    console.log(this.category);
    
  }
  
}