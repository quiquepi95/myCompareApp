import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage implements OnInit {

  catSeleccionada: string;
  datosCategoria: any = [];

  constructor(public navCtrl: NavController,
              public listaService: ListaService ) {

  }
  
  ngOnInit(){
    this.datosCategoria = ['vehiculos','electrodomesticos','electronica'];
  }

}
