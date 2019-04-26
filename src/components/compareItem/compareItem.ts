import { Component, Input, OnInit } from "@angular/core";
import { ListaService } from "../../services/lista.service";

@Component({
    selector: 'page-compare-item',
    templateUrl: 'compareItem.html'
})
export class CompareItemComponent implements OnInit {


    @Input() catSeleccionada: string;
    itemSeleccionadoIzq: any;
    itemSeleccionadoDrcha: any;
    listaIzq: any[] = [];
    listaDrcha: any[] = [];
    subcat: string;

    constructor(public listaService: ListaService){
        }

    ngOnInit(){ }

    itemSelectedIzq( dato: any ){
        this.listaIzq = [];
        this.listaIzq.push( JSON.parse( dato ) );
        console.log( this.listaIzq );
    }

    itemSelectedDrcha( dato: any ){
        this.listaDrcha = [];
        this.listaDrcha.push( JSON.parse( dato ) );
        console.log( this.listaDrcha );
        
    }

}