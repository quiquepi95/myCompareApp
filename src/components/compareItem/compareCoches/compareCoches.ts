import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-coches',
    templateUrl: 'compareCoches.html'
})
export class CompareItemCochesComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}