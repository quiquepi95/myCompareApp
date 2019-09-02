import { Component } from "@angular/core";
import { ListaService } from "../services/lista.service";
import { ItemSliding, NavController } from "ionic-angular";
import { AddPageCategory } from "./addItem/category/add-item-category";

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    hiddenVehiculos = false;
    hiddenCoche = false;
    hiddenMoto = false;
    hiddenElectronica = false;
    hiddenPC = false;
    hiddenElectrodomesticos = false;
    hiddenLavadora = false;
    hiddenFrigo = false;
    hiddenLavavajillas = false;
    hiddenSecadora = false;
    hiddenHorno = false;
    hiddenMicro = false;

    constructor(public listaService: ListaService,
                public navCtrl: NavController){}

    // listaSeleccionada( lista: ListCocheOption ) {
    //     this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista });
    // }

    borrarLista(lista: any){
        this.listaService.borrarLista( lista );
    }

    editarLista( lista: any, slidingItem: ItemSliding ) {
        slidingItem.close();

        this.navCtrl.push( AddPageCategory, {
            cat: lista.categoria,
            list: lista
          });
        
    }
}