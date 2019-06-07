import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-frigo',
    templateUrl: 'compareFrigo.html'
})
export class CompareItemFrigoComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}