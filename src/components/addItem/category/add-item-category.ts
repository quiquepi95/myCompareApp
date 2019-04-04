import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { ListCocheOption } from '../../../interfaces/lista';
import { AddPageSubcategory } from '../subcategory/add-item-subcategory';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  @ViewChild('child1') subcategory:AddPageSubcategory;
  category: string;
  lista: ListCocheOption;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.category = this.navParams.get('cat').toUpperCase();
  }
  
  ngOnInit(){
    this.subcategory.category = this.category;
  }

  logForm() {
    this.lista = {
      "categoria": this.category,
      "subcategoria": this.subcategory.subCatSeleccionada,
      "marca": this.subcategory.addCoches.marca,
      "modelo": this.subcategory.addCoches.modelo,
      "precio": this.subcategory.addCoches.precio,
      "combustible": this.subcategory.addCoches.combustible,
      "cambio": this.subcategory.addCoches.cambio,
      "velocidades": this.subcategory.addCoches.velocidades,
      "km": this.subcategory.addCoches.km,
      "puertas": this.subcategory.addCoches.puertas,
      "plazas": this.subcategory.addCoches.plazas,
      "consumo": this.subcategory.addCoches.consumo,
      "potencia": this.subcategory.addCoches.potencia,
      "cilindros": this.subcategory.addCoches.cilindros,
      "medidas": this.subcategory.addCoches.medidas,
      "peso": this.subcategory.addCoches.peso,
      "traccion": this.subcategory.addCoches.traccion,
      "extras": this.subcategory.addCoches.extras,
    };
    console.log(this.lista);
  }

  goBack(){
    this.navCtrl.pop();
  }
  
}