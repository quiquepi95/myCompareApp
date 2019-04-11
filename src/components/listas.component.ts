import { Component } from "@angular/core";
import { ListaService } from "../services/lista.service";
import { ItemSliding } from "ionic-angular";
import { ListCocheOption } from "../interfaces/lista";

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    hiddenCoche = false;
    hiddenMoto = false;

    constructor(public listaService: ListaService){}

    // listaSeleccionada( lista: ListCocheOption ) {
    //     this.navCtrl.push( AgregarPage, { titulo: lista.titulo, lista: lista });
    // }

    borrarLista(listaCoche?: ListCocheOption, listaMoto?: ListMotoOption){
        if(listaCoche !== null){
            this.deseosService.borrarLista( listaCoche );
        }
        if(listaMoto !== null){
            this.deseosService.borrarLista( listaMoto );
        }
    }

    editarLista( lista: ListCocheOption, slidingItem: ItemSliding ) {
        slidingItem.close();
        // const alerta = this.alertCtrl.create({
        //     title: 'Editar nombre',
        //     message: 'Editar el nombre de la lista',
        //     inputs: [{
        //         name: 'titulo',
        //         placeholder: 'Nombre de la lista',
        //         value: lista.titulo
        //     }],
        //     buttons: [{
        //         text: 'Cancelar'
        //     },{
        //         text: 'Guardar',
        //         handler: data => {
        //             if( data.titulo.length === 0 ){
        //                 return;
        //             }
                    
        //             lista.titulo = data.titulo;
        //             this.deseosService.guardarStorage();
        //         }
        //     }]
        // });

        // alerta.present();
    }
}