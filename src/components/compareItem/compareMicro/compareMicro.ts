import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-micro',
    templateUrl: 'compareMicro.html'
})
export class CompareItemMicroComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}