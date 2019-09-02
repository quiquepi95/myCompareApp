import { Component, OnInit, Output, Input, ViewChild } from '@angular/core';
import { AddCochesComponent } from '../addCoches/addCoches';
import { AddMotosComponent } from '../addMotos/addMotos';
import { AddPcComponent } from '../addPC/addPC';
import { AddLavadoraComponent } from '../addLavadora/addLavadora';
import { AddFrigoComponent } from '../addFrigorifico/addFrigo';
import { AddLavavajillasComponent } from '../addLavavajillas/addLavavajillas';
import { AddSecadoraComponent } from '../addSecadora/addSecadora';
import { AddHornoComponent } from '../addHorno/addHorno';
import { AddMicroComponent } from '../addMicro/addMicro';

@Component({
  selector: 'page-add-subcategory',
  templateUrl: 'add-item-subcategory.html'
})
export class AddPageSubcategory implements OnInit {


  
  @ViewChild('childCoches') addCoches:AddCochesComponent;
  @ViewChild('childMotos') addMotos:AddMotosComponent;
  @ViewChild('childLavadora') addLavadora:AddLavadoraComponent;
  @ViewChild('childFrigo') addFrigo:AddFrigoComponent;
  @ViewChild('childLavavajillas') addLavavajillas:AddLavavajillasComponent;
  @ViewChild('childSecadora') addSecadora:AddSecadoraComponent;
  @ViewChild('childHorno') addHorno:AddHornoComponent;
  @ViewChild('childMicro') addMicro:AddMicroComponent;
  @ViewChild('childPC') addPC:AddPcComponent;

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