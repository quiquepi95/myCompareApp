import { Injectable } from "@angular/core";
import { ListCocheOption, ListMotoOption } from "../interfaces/lista";

@Injectable()
export class ListaService {

    listaCoche: ListCocheOption[] = [];
    listaMoto: ListMotoOption[] = [];

    constructor(){
        
        this.cargarStorage();
        
        // const lista1 = new Lista('Recolectar piedras del infinito');
        // const lista2 = new Lista('Héroes a vencer');

        // this.listas.push(lista1, lista2);
        // console.log( this.listas );
        
    }

    agregarCoche( lista: ListCocheOption ) {
        this.listaCoche.push(lista);
        this.guardarStorage();
    }

    agregarMoto( lista: ListMotoOption ) {
        this.listaMoto.push(lista);
        this.guardarStorage();
    }

    // borrarLista( lista: Lista ) {
    //     this.listas = this.listas.filter( listaData => {
    //         return listaData.id !== lista.id;
    //     });

    //     this.guardarStorage();
    // }

    guardarStorage() {
        localStorage.setItem('dataCoche', JSON.stringify( this.listaCoche ));
        localStorage.setItem('dataMoto', JSON.stringify( this.listaMoto ));
    }

    cargarStorage() {

        if( localStorage.getItem('dataCoche') ){
            this.listaCoche = JSON.parse( localStorage.getItem('dataCoche') );
        } else{
            this.listaCoche = [];
        }
        
        if( localStorage.getItem('dataMoto') ){
            this.listaMoto = JSON.parse( localStorage.getItem('dataMoto') );
        } else{
            this.listaMoto = [];
        }


    }
    
}