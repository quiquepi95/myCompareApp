import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-secadora',
    templateUrl: 'compareSecadora.html'
})
export class CompareItemSecadoraComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}