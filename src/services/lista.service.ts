import { Injectable } from "@angular/core";
import { ListCocheOption, ListMotoOption, ListPCOption } from "../interfaces/lista";

@Injectable()
export class ListaService {

    listaCoche: ListCocheOption[] = [];
    listaMoto: ListMotoOption[] = [];
    listaPC: ListPCOption[] = [];

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
            case 'PC':
                this.listaPC.push(lista);
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
        this.listaPC = this.listaPC.filter( listaData => {
            return listaData.id !== lista.id;
        });

        this.guardarStorage();
    }

    guardarStorage() {
        localStorage.setItem('dataCoche', JSON.stringify( this.listaCoche ));
        localStorage.setItem('dataMoto', JSON.stringify( this.listaMoto ));
        localStorage.setItem('dataPC', JSON.stringify( this.listaPC ));
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

        if( localStorage.getItem('dataPC') ){
            this.listaPC = JSON.parse( localStorage.getItem('dataPC') );
        } else{
            this.listaPC = [];
        }


    }
    
}