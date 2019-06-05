import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { AddCochesComponent } from '../addCoches/addCoches';
import { AddMotosComponent } from '../addMotos/addMotos';
import { AddPcComponent } from '../addPC/addPC';
import { AddLavadoraComponent } from '../addLavadora/addLavadora';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory implements OnInit {


  
  @ViewChild('childCoches') addCoches:AddCochesComponent;
  @ViewChild('childMotos') addMotos:AddMotosComponent;
  @ViewChild('childPC') addPC:AddPcComponent;
  @ViewChild('childLavadora') addLavadora:AddLavadoraComponent;

  @Input() category: string;
  @Input() lista: any;
  @Output() subCatSeleccionada: string;

  datosSubcategoria: any = [];

  constructor(){}
  
  ngOnInit(){
    console.log( this.category );
    if ( this.lista !== null ){
      this.subCatSeleccionada = this.lista.subcategoria;
    }
    
    if( this.category === 'VEHICULOS') {
      this.datosSubcategoria = ['coche','moto'];
    }
    if( this.category === 'ELECTRODOMESTICOS') {
      this.datosSubcategoria = ['lavadora','frigoríficos','lavavajillas','secadoras','hornos','microhondas'];
    }
    if( this.category === 'ELECTRONICA') {
      this.datosSubcategoria = ['PC','portátil','altavoces'];
    }
    
  }
  
}