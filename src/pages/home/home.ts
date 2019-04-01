import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../addItem/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(  public navCtrl: NavController,
                private alertCtrl: AlertController ) {

  }

  addItem(){
    const alert =  this.alertCtrl.create({
      title: 'Nuevo item',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre del objeto'
      },{
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        checked: true
      },{
        name: 'radio2',
        type: 'radio',
        label: 'Radio 2',
        value: 'value2'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text:'Agregar',
        handler: data => {
          if( data.titulo.length === 0 ){
            return;
          }
          this.navCtrl.push( AddPage, {
            titulo: data.titulo
          });
        }
      }]
    });

    alert.present();
  }

}
