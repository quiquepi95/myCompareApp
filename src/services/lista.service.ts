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

    agregarItem( lista: any ) {
        switch(lista.subcategoria){
            case 'COCHE':
                this.listaCoche.push(lista);
                break;
            case 'MOTO':
                this.listaMoto.push(lista);
                break;
            default:
                console.log('No se ha podido agregar el objeto.');
                break;
        };
        
        this.guardarStorage();
    }

    borrarLista( lista: any ) {
        this.listaCoche = this.listaCoche.filter( listaData => {
            return listaData.id !== lista.id;
        });
        this.listaMoto = this.listaMoto.filter( listaData => {
            return listaData.id !== lista.id;
        });

        this.guardarStorage();
    }

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