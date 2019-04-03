import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory implements OnInit {

  @Input() categoria: any;
  subCatSeleccionada: string;

  datosSubcategoria: any = [];

  constructor(){
  }
  
  ngOnInit(){
    console.log( this.categoria );
    if( this.categoria === 'VEHICULOS') {
      this.datosSubcategoria = ['coche','moto'];
    }
  }
  
  seleccionar(){
    console.log( this.subCatSeleccionada );
  }
  
}