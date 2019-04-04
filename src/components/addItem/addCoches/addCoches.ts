import { Component, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-add-coche',
    templateUrl: 'addCoches.html'
})
export class AddCochesComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() motor: string;
    @Output() combustible: string;
    @Output() cambio: string;
    @Output() velocidades: string;
    @Output() km: string;
    @Output() puertas: string;
    @Output() plazas: string;
    @Output() consumo: string;
    @Output() potencia: string;
    @Output() cilindros: string;
    @Output() medidas: string;
    @Output() peso: string;
    @Output() traccion: string;
    @Output() extras: string;

    constructor(){}

    ngOnInit(){
    }
}