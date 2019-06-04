import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-pc',
    templateUrl: 'comparePC.html'
})
export class CompareItemPcComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}