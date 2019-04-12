import { Component, OnInit, Output, Input } from "@angular/core";
import { ListMotoOption } from "../../../interfaces/lista";

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
    @Input() lista: ListMotoOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.motor = this.lista.motor;
            this.combustible = this.lista.combustible;
            this.cambio = this.lista.cambio;
            this.velocidades = this.lista.velocidades;
            this.km = this.lista.km;
            this.plazas = this.lista.plazas;
            this.consumo = this.lista.consumo;
            this.potencia = this.lista.potencia;
            this.cilindrada = this.lista.cilindrada;
            this.cilindros = this.lista.cilindros;
            this.medidas = this.lista.medidas;
            this.peso = this.lista.peso;
            this.extras = this.lista.extras;
        }
    }
}