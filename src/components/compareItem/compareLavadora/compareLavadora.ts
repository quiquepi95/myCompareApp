import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-lavadora',
    templateUrl: 'compareLavadora.html'
})
export class CompareItemLavadoraComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}