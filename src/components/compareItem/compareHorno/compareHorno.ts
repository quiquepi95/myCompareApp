import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-horno',
    templateUrl: 'compareHorno.html'
})
export class CompareItemHornoComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}