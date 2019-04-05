import { Component, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-add-moto',
    templateUrl: 'addMotos.html'
})
export class AddMotosComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() motor: string;
    @Output() combustible: string;
    @Output() cambio: string;
    @Output() velocidades: string;
    @Output() km: string;
    @Output() plazas: string;
    @Output() consumo: string;
    @Output() potencia: string;
    @Output() cilindrada: string;
    @Output() cilindros: string;
    @Output() medidas: string;
    @Output() peso: string;
    @Output() extras: string;
    
    constructor(){}

    ngOnInit(){
        console.log('LLego al addMotos');
    }
}