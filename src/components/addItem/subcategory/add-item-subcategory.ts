import { Component, OnInit } from '@angular/core';
import { AddPageCategory } from '../category/add-item-category';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory extends AddPageCategory implements OnInit {

  subCatSeleccionada: string;

  datosSubcategoria: any = [];

  constructor(public navParams: NavParams){
    super(null,navParams);
  }
  
  ngOnInit(){
    console.log( this.category );
    
    if( this.category === 'VEHICULOS') {
      this.datosSubcategoria = ['coche','moto'];
    }
  }
  
  seleccionar(){
    this.lista = {
      "categoria": this.category,
      "subcategoria": this.subCatSeleccionada
    };
    console.log( this.lista );
  }
  
}