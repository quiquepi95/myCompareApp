import { Component, Input, OnInit } from "@angular/core";
import { ListaService } from "../../../services/lista.service";

@Component({
    selector: 'page-compare-item',
    templateUrl: 'compareItem.html'
})
export class CompareItemComponent implements OnInit {

    @Input() catSeleccionada: string;
    itemSeleccionadoIzq: any;
    itemSeleccionadoDrcha: any;

    constructor(public listaService: ListaService){ }

    ngOnInit(){ }

}