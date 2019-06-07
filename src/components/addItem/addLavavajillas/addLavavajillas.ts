import { Component, OnInit, Output, Input } from "@angular/core";
import { ListLavavajillasOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-lavavajillas',
    templateUrl: 'addLavavajillas.html'
})
export class AddLavavajillasComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() tipo: string;
    @Output() eficaciaLavado: string;
    @Output() eficaciaSecado: string;
    @Output() capacidad: string;
    @Output() numProgramas: string;
    @Output() tecnologia: string;
    @Output() indicador: string;
    @Output() indicaciones: string;
    @Output() numTemp: string;
    @Output() sistSeguridad: string;
    @Output() nivelRuido: string;
    @Output() cestas: string;
    @Output() bandejaCubiertos: string;
    @Output() medidas: string;
    @Output() clasfEnergia: string;
    @Output() consumoAgua: string;
    @Output() consumoEnergia: string;
    @Output() tension: string;
    @Input() lista: ListLavavajillasOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.tipo = this.lista.tipo;
            this.eficaciaLavado = this.lista.eficaciaLavado;
            this.eficaciaSecado = this.lista.eficaciaSecado;
            this.capacidad = this.lista.capacidad;
            this.numProgramas = this.lista.numProgramas;
            this.tecnologia = this.lista.tecnologia;
            this.indicador = this.lista.indicador;
            this.indicaciones = this.lista.indicaciones;
            this.numTemp = this.lista.numTemp;
            this.sistSeguridad = this.lista.sistSeguridad;
            this.nivelRuido = this.lista.nivelRuido;
            this.cestas = this.lista.cestas;
            this.bandejaCubiertos = this.lista.bandejaCubiertos;
            this.medidas = this.lista.medidas;
            this.clasfEnergia = this.lista.clasfEnergia;
            this.consumoAgua = this.lista.consumoAgua;
            this.consumoEnergia = this.lista.consumoEnergia;
            this.tension = this.lista.tension;
        }
    }
}