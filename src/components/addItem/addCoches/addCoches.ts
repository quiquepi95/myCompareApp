import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-add-coche',
    templateUrl: 'addCoches.html'
})
export class AddCochesComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        console.log('LLego al addCoches');
    }
}