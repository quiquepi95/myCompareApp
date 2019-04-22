import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage {

  constructor(public navCtrl: NavController,
              public listaService: ListaService) {

  }

}
