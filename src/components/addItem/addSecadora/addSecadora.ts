import { Component, OnInit, Output, Input } from "@angular/core";
import { ListSecadoraOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-secadora',
    templateUrl: 'addSecadora.html'
})
export class AddSecadoraComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() tipoSecadora: string;
    @Output() peso: string;
    @Output() medidas: string;
    @Output() capacidad: string;
    @Output() potencia: string;
    @Output() clasfEnergia: string;
    @Output() ruido: string;
    @Output() antiarrugas: string;
    @Output() alergias: string;
    @Output() consumo: string;
    @Output() numProgramas: string;
    @Output() lana: string;
    @Output() camisas: string;
    @Output() tempFrio: string;
    @Output() tempCaliente: string;
    @Output() otros: string;
    @Input() lista: ListSecadoraOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.tipoSecadora = this.lista.tipoSecadora;
            this.peso = this.lista.peso;
            this.medidas = this.lista.medidas;
            this.capacidad = this.lista.capacidad;
            this.potencia = this.lista.potencia;
            this.clasfEnergia = this.lista.clasfEnergia;
            this.ruido = this.lista.ruido;
            this.antiarrugas = this.lista.antiarrugas;
            this.alergias = this.lista.alergias;
            this.consumo = this.lista.consumo;
            this.numProgramas = this.lista.numProgramas;
            this.lana = this.lista.lana;
            this.camisas = this.lista.camisas;
            this.tempFrio = this.lista.tempFrio;
            this.tempCaliente = this.lista.tempCaliente;
            this.otros = this.lista.otros;
        }
    }
}