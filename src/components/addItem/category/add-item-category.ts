import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { AddPageSubcategory } from '../subcategory/add-item-subcategory';
import { ListaService } from '../../../services/lista.service';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-item-category.html'
})
export class AddPageCategory implements OnInit {

  @ViewChild('childSub') subcategory:AddPageSubcategory;
  category: string;
  lista: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public listaService: ListaService) {
    this.category = this.navParams.get('cat').toUpperCase();
    this.lista = this.navParams.get('list');
  }
  
  ngOnInit(){
    this.subcategory.category = this.category;
  }

  logForm() {
    console.log(this.subcategory.subCatSeleccionada);
    if ( this.lista !== null ){
      this.listaService.borrarLista( this.lista );
    }
    
    switch(this.subcategory.subCatSeleccionada){
      case 'COCHE':
        if(this.subcategory.addCoches.marca){
          let listaCoche = {};
          if ( this.lista === null ){
            listaCoche = {
              "id": new Date().getTime(),
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
          } else{
            listaCoche = {
              "id": this.lista.id,
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
          }
          this.listaService.agregarItem( listaCoche );
          this.navCtrl.pop();
        }
        break;
        case 'MOTO':
        if(this.subcategory.addMotos.marca){
          let listaMoto = {};
          if ( this.lista === null ){
            listaMoto = {
                "id": new Date().getTime(),
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
            } else {
              listaMoto = {
                "id": this.lista.id,
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
            }
            this.listaService.agregarItem( listaMoto );
            this.navCtrl.pop();
          }
          break;
          case 'PC':
          if(this.subcategory.addMotos.marca){
            // let listaPC = {
            //   "id": new Date().getTime(),
            //   "categoria": this.category,
            //   "subcategoria": this.subcategory.subCatSeleccionada,
            //   "marca": this.subcategory.addMotos.marca,
            //   "modelo": this.subcategory.addMotos.modelo,
            //   "precio": this.subcategory.addMotos.precio,
            //   "SO": this.subcategory.addMotos.SO,
            //   "RAM": this.subcategory.addMotos.RAM,
            //   "ROM": this.subcategory.addMotos.ROM,
            //   "procesador": this.subcategory.addMotos.procesador,
            //   "grafica": this.subcategory.addMotos.grafica,
            //   "usb2": this.subcategory.addMotos.usb2,
            //   "usb3": this.subcategory.addMotos.usb3,
            //   "usbc": this.subcategory.addMotos.usbc,
            //   "dvd": this.subcategory.addMotos.dvd,
            //   "ethernet": this.subcategory.addMotos.ethernet,
            //   "audio": this.subcategory.addMotos.audio,
            //   "video": this.subcategory.addMotos.video,
            //   "peso": this.subcategory.addMotos.peso,
            // };
            // this.listaService.agregarMoto( listaPC );
            this.navCtrl.pop();
          }
          break;
        default:
          console.log('No hay datos disponibles');
          break;
    }
    
  }

  goBack(){
    this.navCtrl.pop();
  }
  
}