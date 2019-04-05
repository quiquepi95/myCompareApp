import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { ListCocheOption, ListMotoOption, Lista } from '../../../interfaces/lista';
import { AddPageSubcategory } from '../subcategory/add-item-subcategory';
import { ListaService } from '../../../services/lista.service';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  @ViewChild('childSub') subcategory:AddPageSubcategory;
  category: string;
  listaCoche: ListCocheOption;
  listaMoto: ListMotoOption;
  listaAll: Lista;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public listaService: ListaService) {
    this.category = this.navParams.get('cat').toUpperCase();
  }
  
  ngOnInit(){
    this.subcategory.category = this.category;
  }

  logForm() {
    console.log(this.subcategory.subCatSeleccionada);
    
    switch(this.subcategory.subCatSeleccionada){
      case 'COCHE':
        let listaCoche = {
          "categoria": this.category,
          "subcategoria": this.subcategory.subCatSeleccionada,
          "marca": this.subcategory.addCoches.marca,
          "modelo": this.subcategory.addCoches.modelo,
          "precio": this.subcategory.addCoches.precio,
          "motor": this.subcategory.addCoches.motor,
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
        console.log(this.listaCoche);

        this.listaCoche = new ListCocheOption( listaCoche )

        this.listaService.agregarCoche(this.listaCoche);
        
        break;
      case 'MOTO':
          this.listaMoto = {
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addMotos.marca,
            "modelo": this.subcategory.addMotos.modelo,
            "precio": this.subcategory.addMotos.precio,
            "motor": this.subcategory.addMotos.motor,
            "combustible": this.subcategory.addMotos.combustible,
            "cambio": this.subcategory.addMotos.cambio,
            "velocidades": this.subcategory.addMotos.velocidades,
            "km": this.subcategory.addMotos.km,
            "plazas": this.subcategory.addMotos.plazas,
            "consumo": this.subcategory.addMotos.consumo,
            "potencia": this.subcategory.addMotos.potencia,
            "cilindrada": this.subcategory.addMotos.cilindrada,
            "cilindros": this.subcategory.addMotos.cilindros,
            "medidas": this.subcategory.addMotos.medidas,
            "peso": this.subcategory.addMotos.peso,
            "extras": this.subcategory.addMotos.extras,
          };
          console.log(this.listaMoto);
          break;
        default:
          console.log('No hay datos disponibles');
          break;
    }
    
    this.navCtrl.pop();
  }

  goBack(){
    this.navCtrl.pop();
  }
  
}