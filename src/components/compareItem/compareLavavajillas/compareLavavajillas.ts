import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-lavavajillas',
    templateUrl: 'compareLavavajillas.html'
})
export class CompareItemLavavajillasComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}