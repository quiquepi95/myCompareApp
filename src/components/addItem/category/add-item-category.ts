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
        if(this.subcategory.addPC.marca){
          let listaPC = {};
        if ( this.lista === null ){
          listaPC = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addPC.marca,
            "modelo": this.subcategory.addPC.modelo,
            "precio": this.subcategory.addPC.precio,
            "SO": this.subcategory.addPC.SO,
            "RAM": this.subcategory.addPC.RAM,
            "ROM": this.subcategory.addPC.ROM,
            "procesador": this.subcategory.addPC.procesador,
            "GPU": this.subcategory.addPC.grafica,
            "usb2": this.subcategory.addPC.usb2,
            "usb3": this.subcategory.addPC.usb3,
            "usbc": this.subcategory.addPC.usbc,
            "dvd": this.subcategory.addPC.dvd,
            "ethernet": this.subcategory.addPC.ethernet,
            "audio": this.subcategory.addPC.audio,
            "video": this.subcategory.addPC.video,
            "peso": this.subcategory.addPC.peso,
          };
          } else {
            listaPC = {
              "id": this.lista.id,
              "categoria": this.category,
              "subcategoria": this.subcategory.subCatSeleccionada,
              "marca": this.subcategory.addPC.marca,
              "modelo": this.subcategory.addPC.modelo,
              "precio": this.subcategory.addPC.precio,
              "SO": this.subcategory.addPC.SO,
              "RAM": this.subcategory.addPC.RAM,
              "ROM": this.subcategory.addPC.ROM,
              "procesador": this.subcategory.addPC.procesador,
              "GPU": this.subcategory.addPC.grafica,
              "usb2": this.subcategory.addPC.usb2,
              "usb3": this.subcategory.addPC.usb3,
              "usbc": this.subcategory.addPC.usbc,
              "dvd": this.subcategory.addPC.dvd,
              "ethernet": this.subcategory.addPC.ethernet,
              "audio": this.subcategory.addPC.audio,
              "video": this.subcategory.addPC.video,
              "peso": this.subcategory.addPC.peso,
            };
          }
          this.listaService.agregarItem( listaPC );
          this.navCtrl.pop();
        }
        break;
      case 'LAVADORA':
        if(this.subcategory.addLavadora.marca){
          let listaLavadora = {};
        if ( this.lista === null ){
          listaLavadora = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addLavadora.marca,
            "modelo": this.subcategory.addLavadora.modelo,
            "precio": this.subcategory.addLavadora.precio,
            "velocidad": this.subcategory.addLavadora.velocidad,
            "clasfEnergia": this.subcategory.addLavadora.clasfEnergia,
            "tipoCarga": this.subcategory.addLavadora.tipoCarga,
            "capTambor": this.subcategory.addLavadora.capTambor,
            "capCarga": this.subcategory.addLavadora.capCarga,
            "medidas": this.subcategory.addLavadora.medidas,
            "consumoAgua": this.subcategory.addLavadora.consumoAgua,
            "consumoEnergia": this.subcategory.addLavadora.consumoEnergia,
            "frecuencia": this.subcategory.addLavadora.frecuencia,
            "extra": this.subcategory.addLavadora.extra,
          };
        } else {
          listaLavadora = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addLavadora.marca,
            "modelo": this.subcategory.addLavadora.modelo,
            "precio": this.subcategory.addLavadora.precio,
            "velocidad": this.subcategory.addLavadora.velocidad,
            "clasfEnergia": this.subcategory.addLavadora.clasfEnergia,
            "tipoCarga": this.subcategory.addLavadora.tipoCarga,
            "capTambor": this.subcategory.addLavadora.capTambor,
            "capCarga": this.subcategory.addLavadora.capCarga,
            "medidas": this.subcategory.addLavadora.medidas,
            "consumoAgua": this.subcategory.addLavadora.consumoAgua,
            "consumoEnergia": this.subcategory.addLavadora.consumoEnergia,
            "frecuencia": this.subcategory.addLavadora.frecuencia,
            "extra": this.subcategory.addLavadora.extra,
          };
        }
        this.listaService.agregarItem( listaLavadora );
        this.navCtrl.pop();
        }
        break;
        case 'FRIGORÍFICOS':
        if(this.subcategory.addFrigo.marca){
          let listaFrigo = {};
        if ( this.lista === null ){
          listaFrigo = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addFrigo.marca,
            "modelo": this.subcategory.addFrigo.modelo,
            "precio": this.subcategory.addFrigo.precio,
            "tipoFrigo": this.subcategory.addFrigo.tipoFrigo,
            "capBrutaRefrig": this.subcategory.addFrigo.capBrutaRefrig,
            "capBrutaCongel": this.subcategory.addFrigo.capBrutaCongel,
            "capBrutaTotal": this.subcategory.addFrigo.capBrutaTotal,
            "capUtilRefrig": this.subcategory.addFrigo.capUtilRefrig,
            "capUtilCongel": this.subcategory.addFrigo.capUtilCongel,
            "capUtilTotal": this.subcategory.addFrigo.capUtilTotal,
            "tecnologia": this.subcategory.addFrigo.tecnologia,
            "ctrlTemp": this.subcategory.addFrigo.ctrlTemp,
            "tirador": this.subcategory.addFrigo.tirador,
            "indicador": this.subcategory.addFrigo.indicador,
            "funcIndicador": this.subcategory.addFrigo.funcIndicador,
            "medidas": this.subcategory.addFrigo.medidas,
            "clasfEnergia": this.subcategory.addFrigo.clasfEnergia,
            "consumo": this.subcategory.addFrigo.consumo,
            "fecuencia": this.subcategory.addFrigo.fecuencia,
            "tension": this.subcategory.addFrigo.tension,
            "alimentacion": this.subcategory.addFrigo.alimentacion,
          };
        } else {
          listaFrigo = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addFrigo.marca,
            "modelo": this.subcategory.addFrigo.modelo,
            "precio": this.subcategory.addFrigo.precio,
            "tipoFrigo": this.subcategory.addFrigo.tipoFrigo,
            "capBrutaRefrig": this.subcategory.addFrigo.capBrutaRefrig,
            "capBrutaCongel": this.subcategory.addFrigo.capBrutaCongel,
            "capBrutaTotal": this.subcategory.addFrigo.capBrutaTotal,
            "capUtilRefrig": this.subcategory.addFrigo.capUtilRefrig,
            "capUtilCongel": this.subcategory.addFrigo.capUtilCongel,
            "capUtilTotal": this.subcategory.addFrigo.capUtilTotal,
            "tecnologia": this.subcategory.addFrigo.tecnologia,
            "ctrlTemp": this.subcategory.addFrigo.ctrlTemp,
            "tirador": this.subcategory.addFrigo.tirador,
            "indicador": this.subcategory.addFrigo.indicador,
            "funcIndicador": this.subcategory.addFrigo.funcIndicador,
            "medidas": this.subcategory.addFrigo.medidas,
            "clasfEnergia": this.subcategory.addFrigo.clasfEnergia,
            "consumo": this.subcategory.addFrigo.consumo,
            "fecuencia": this.subcategory.addFrigo.fecuencia,
            "tension": this.subcategory.addFrigo.tension,
            "alimentacion": this.subcategory.addFrigo.alimentacion,
          };
        }
        this.listaService.agregarItem( listaFrigo );
        this.navCtrl.pop();
        }
        break;
      case 'LAVAVAJILLAS':
        if(this.subcategory.addLavavajillas.marca){
          let listaLavavajillas = {};
        if ( this.lista === null ){
          listaLavavajillas = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addLavavajillas.marca,
            "modelo": this.subcategory.addLavavajillas.modelo,
            "precio": this.subcategory.addLavavajillas.precio,
            "tipo": this.subcategory.addLavavajillas.tipo,
            "eficaciaLavado": this.subcategory.addLavavajillas.eficaciaLavado,
            "eficaciaSecado": this.subcategory.addLavavajillas.eficaciaSecado,
            "capacidad": this.subcategory.addLavavajillas.capacidad,
            "numProgramas": this.subcategory.addLavavajillas.numProgramas,
            "tecnologia": this.subcategory.addLavavajillas.tecnologia,
            "indicador": this.subcategory.addLavavajillas.indicador,
            "indicaciones": this.subcategory.addLavavajillas.indicaciones,
            "numTemp": this.subcategory.addLavavajillas.numTemp,
            "sistSeguridad": this.subcategory.addLavavajillas.sistSeguridad,
            "nivelRuido": this.subcategory.addLavavajillas.nivelRuido,
            "cestas": this.subcategory.addLavavajillas.cestas,
            "bandejaCubiertos": this.subcategory.addLavavajillas.bandejaCubiertos,
            "medidas": this.subcategory.addLavavajillas.medidas,
            "clasfEnergia": this.subcategory.addLavavajillas.clasfEnergia,
            "consumoAgua": this.subcategory.addLavavajillas.consumoAgua,
            "consumoEnergia": this.subcategory.addLavavajillas.consumoEnergia,
            "tension": this.subcategory.addLavavajillas.tension,
          };
        } else {
          listaLavavajillas = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addLavavajillas.marca,
            "modelo": this.subcategory.addLavavajillas.modelo,
            "precio": this.subcategory.addLavavajillas.precio,
            "tipo": this.subcategory.addLavavajillas.tipo,
            "eficaciaLavado": this.subcategory.addLavavajillas.eficaciaLavado,
            "eficaciaSecado": this.subcategory.addLavavajillas.eficaciaSecado,
            "capacidad": this.subcategory.addLavavajillas.capacidad,
            "numProgramas": this.subcategory.addLavavajillas.numProgramas,
            "tecnologia": this.subcategory.addLavavajillas.tecnologia,
            "indicador": this.subcategory.addLavavajillas.indicador,
            "indicaciones": this.subcategory.addLavavajillas.indicaciones,
            "numTemp": this.subcategory.addLavavajillas.numTemp,
            "sistSeguridad": this.subcategory.addLavavajillas.sistSeguridad,
            "nivelRuido": this.subcategory.addLavavajillas.nivelRuido,
            "cestas": this.subcategory.addLavavajillas.cestas,
            "bandejaCubiertos": this.subcategory.addLavavajillas.bandejaCubiertos,
            "medidas": this.subcategory.addLavavajillas.medidas,
            "clasfEnergia": this.subcategory.addLavavajillas.clasfEnergia,
            "consumoAgua": this.subcategory.addLavavajillas.consumoAgua,
            "consumoEnergia": this.subcategory.addLavavajillas.consumoEnergia,
            "tension": this.subcategory.addLavavajillas.tension,
          };
        }
        this.listaService.agregarItem( listaLavavajillas );
        this.navCtrl.pop();
        }
        break;
      case 'SECADORAS':
        if(this.subcategory.addSecadora.marca){
          let listaSecadora = {};
        if ( this.lista === null ){
          listaSecadora = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addSecadora.marca,
            "modelo": this.subcategory.addSecadora.modelo,
            "precio": this.subcategory.addSecadora.precio,
            "tipoSecadora": this.subcategory.addSecadora.tipoSecadora,
            "peso": this.subcategory.addSecadora.peso,
            "medidas": this.subcategory.addSecadora.medidas,
            "capacidad": this.subcategory.addSecadora.capacidad,
            "potencia": this.subcategory.addSecadora.potencia,
            "clasfEnergia": this.subcategory.addSecadora.clasfEnergia,
            "ruido": this.subcategory.addSecadora.ruido,
            "antiarrugas": this.subcategory.addSecadora.antiarrugas,
            "alergias": this.subcategory.addSecadora.alergias,
            "consumo": this.subcategory.addSecadora.consumo,
            "numProgramas": this.subcategory.addSecadora.numProgramas,
            "lana": this.subcategory.addSecadora.lana,
            "camisas": this.subcategory.addSecadora.camisas,
            "tempFrio": this.subcategory.addSecadora.tempFrio,
            "tempCaliente": this.subcategory.addSecadora.tempCaliente,
            "otros": this.subcategory.addSecadora.otros,
          };
        } else {
          listaSecadora = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addSecadora.marca,
            "modelo": this.subcategory.addSecadora.modelo,
            "precio": this.subcategory.addSecadora.precio,
            "tipoSecadora": this.subcategory.addSecadora.tipoSecadora,
            "peso": this.subcategory.addSecadora.peso,
            "medidas": this.subcategory.addSecadora.medidas,
            "capacidad": this.subcategory.addSecadora.capacidad,
            "potencia": this.subcategory.addSecadora.potencia,
            "clasfEnergia": this.subcategory.addSecadora.clasfEnergia,
            "ruido": this.subcategory.addSecadora.ruido,
            "antiarrugas": this.subcategory.addSecadora.antiarrugas,
            "alergias": this.subcategory.addSecadora.alergias,
            "consumo": this.subcategory.addSecadora.consumo,
            "numProgramas": this.subcategory.addSecadora.numProgramas,
            "lana": this.subcategory.addSecadora.lana,
            "camisas": this.subcategory.addSecadora.camisas,
            "tempFrio": this.subcategory.addSecadora.tempFrio,
            "tempCaliente": this.subcategory.addSecadora.tempCaliente,
            "otros": this.subcategory.addSecadora.otros,
          };
        }
        this.listaService.agregarItem( listaSecadora );
        this.navCtrl.pop();
        }
        break;
      case 'HORNOS':
        if(this.subcategory.addHorno.marca){
          let listaHorno = {};
        if ( this.lista === null ){
          listaHorno = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addHorno.marca,
            "modelo": this.subcategory.addHorno.modelo,
            "precio": this.subcategory.addHorno.precio,
            "tipoHorno": this.subcategory.addHorno.tipoHorno,
            "capacidad": this.subcategory.addHorno.capacidad,
            "medidas": this.subcategory.addHorno.medidas,
            "bandejas": this.subcategory.addHorno.bandejas,
            "numBandejas": this.subcategory.addHorno.numBandejas,
            "autolimpieza": this.subcategory.addHorno.autolimpieza,
            "clasfEnergia": this.subcategory.addHorno.clasfEnergia,
            "functHorno": this.subcategory.addHorno.functHorno,
            "limpieza": this.subcategory.addHorno.limpieza,
            "interfaz": this.subcategory.addHorno.interfaz,
            "grill": this.subcategory.addHorno.grill,
            "ventilador": this.subcategory.addHorno.ventilador,
            "otros": this.subcategory.addHorno.otros,
          };
        } else {
          listaHorno = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addHorno.marca,
            "modelo": this.subcategory.addHorno.modelo,
            "precio": this.subcategory.addHorno.precio,
            "tipoHorno": this.subcategory.addHorno.tipoHorno,
            "capacidad": this.subcategory.addHorno.capacidad,
            "medidas": this.subcategory.addHorno.medidas,
            "bandejas": this.subcategory.addHorno.bandejas,
            "numBandejas": this.subcategory.addHorno.numBandejas,
            "autolimpieza": this.subcategory.addHorno.autolimpieza,
            "clasfEnergia": this.subcategory.addHorno.clasfEnergia,
            "functHorno": this.subcategory.addHorno.functHorno,
            "limpieza": this.subcategory.addHorno.limpieza,
            "interfaz": this.subcategory.addHorno.interfaz,
            "grill": this.subcategory.addHorno.grill,
            "ventilador": this.subcategory.addHorno.ventilador,
            "otros": this.subcategory.addHorno.otros,
          };
        }
        this.listaService.agregarItem( listaHorno );
        this.navCtrl.pop();
        }
        break;
      case 'MICROHONDAS':
        if(this.subcategory.addMicro.marca){
          let listaMicro = {};
        if ( this.lista === null ){
          listaMicro = {
            "id": new Date().getTime(),
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addMicro.marca,
            "modelo": this.subcategory.addMicro.modelo,
            "precio": this.subcategory.addMicro.precio,
            "tipoMicro": this.subcategory.addMicro.tipoMicro,
            "capacidad": this.subcategory.addMicro.capacidad,
            "peso": this.subcategory.addMicro.peso,
            "medidasExter": this.subcategory.addMicro.medidasExter,
            "medidasInter": this.subcategory.addMicro.medidasInter,
            "tipoApertura": this.subcategory.addMicro.tipoApertura,
            "diamPlato": this.subcategory.addMicro.diamPlato,
            "platoGira": this.subcategory.addMicro.platoGira,
            "color": this.subcategory.addMicro.color,
            "numPotencias": this.subcategory.addMicro.numPotencias,
            "potencia": this.subcategory.addMicro.potencia,
            "frecuencia": this.subcategory.addMicro.frecuencia,
            "tension": this.subcategory.addMicro.tension,
            "alimentacion": this.subcategory.addMicro.alimentacion,
            "otros": this.subcategory.addMicro.otros,
          };
        } else {
          listaMicro = {
            "id": this.lista.id,
            "categoria": this.category,
            "subcategoria": this.subcategory.subCatSeleccionada,
            "marca": this.subcategory.addMicro.marca,
            "modelo": this.subcategory.addMicro.modelo,
            "precio": this.subcategory.addMicro.precio,
            "tipoMicro": this.subcategory.addMicro.tipoMicro,
            "capacidad": this.subcategory.addMicro.capacidad,
            "peso": this.subcategory.addMicro.peso,
            "medidasExter": this.subcategory.addMicro.medidasExter,
            "medidasInter": this.subcategory.addMicro.medidasInter,
            "tipoApertura": this.subcategory.addMicro.tipoApertura,
            "diamPlato": this.subcategory.addMicro.diamPlato,
            "platoGira": this.subcategory.addMicro.platoGira,
            "color": this.subcategory.addMicro.color,
            "numPotencias": this.subcategory.addMicro.numPotencias,
            "potencia": this.subcategory.addMicro.potencia,
            "frecuencia": this.subcategory.addMicro.frecuencia,
            "tension": this.subcategory.addMicro.tension,
            "alimentacion": this.subcategory.addMicro.alimentacion,
            "otros": this.subcategory.addMicro.otros,
          };
        }
        this.listaService.agregarItem( listaMicro );
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