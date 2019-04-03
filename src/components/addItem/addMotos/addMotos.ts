import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-add-moto',
    templateUrl: 'addMotos.html'
})
export class AddMotosComponent implements OnInit {
    constructor(){}

    ngOnInit(){
        console.log('LLego al addMotos');
    }
}