import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-compare-item-motos',
    templateUrl: 'compareMotos.html'
})
export class CompareItemMotosComponent {

    @Input() listaIzq: any;
    @Input() listaDrcha: any;
    constructor(){}
}