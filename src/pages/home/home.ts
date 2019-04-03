import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AddPageCategory } from '../../components/addItem/category/add-item-category';

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
        name: 'radio1',
        type: 'radio',
        label: 'Vehículos',
        value: 'vehiculos',
        checked: true
      },{
        name: 'radio2',
        type: 'radio',
        label: 'Electrodomésticos',
        value: 'electrodomesticos'
      },{
        name: 'radio3',
        type: 'radio',
        label: 'Ordenadores',
        value: 'ordenadores'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text:'Agregar',
        handler: data => {
          this.navCtrl.push( AddPageCategory, {
            cat: data
          });
        }
      }]
    });

    alert.present();
  }

}
