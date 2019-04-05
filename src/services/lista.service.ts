import { Injectable } from "@angular/core";
import { ListCocheOption } from "../interfaces/lista";

@Injectable()
export class ListaService {

    listas: ListCocheOption[] = [];

    constructor(){
        
        this.cargarStorage();
        
        // const lista1 = new Lista('Recolectar piedras del infinito');
        // const lista2 = new Lista('Héroes a vencer');

        // this.listas.push(lista1, lista2);
        // console.log( this.listas );
        
    }

    agregarCoche( lista: ListCocheOption ) {
        console.log( lista );
        
        this.listas.push(lista);

        console.log( this.listas );

        this.guardarStorage();
    }

    // borrarLista( lista: Lista ) {
    //     this.listas = this.listas.filter( listaData => {
    //         return listaData.id !== lista.id;
    //     });

    //     this.guardarStorage();
    // }

    guardarStorage() {
        localStorage.setItem('dataLista', JSON.stringify( this.listas ));
    }

    cargarStorage() {
        if ( localStorage.getItem('dataLista') ) {
            this.listas = JSON.parse( localStorage.getItem('dataLista') );
        } else {
            this.listas = null;
        }
    }
    
}