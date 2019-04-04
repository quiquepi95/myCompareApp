import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { AddCochesComponent } from '../addCoches/addCoches';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory implements OnInit {


  
  @ViewChild('child2') addCoches:AddCochesComponent;

  @Input() category: string;
  @Output() subCatSeleccionada: string;

  datosSubcategoria: any = [];

  constructor(){}
  
  ngOnInit(){
    console.log( this.category );
    
    if( this.category === 'VEHICULOS') {
      this.datosSubcategoria = ['coche','moto'];
    }
  }
  
}