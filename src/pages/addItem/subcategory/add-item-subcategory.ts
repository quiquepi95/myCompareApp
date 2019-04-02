import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory implements OnInit {

  @Input() categoria;
  subCatSeleccionada: string = 'coche';

  constructor(){}
  
  ngOnInit(){
    console.log( this.categoria );
    
  }
  
}