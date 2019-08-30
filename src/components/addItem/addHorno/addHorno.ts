import { Component, OnInit, Output, Input } from "@angular/core";
import { ListHornoOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-horno',
    templateUrl: 'addHorno.html'
})
export class AddHornoComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() tipoHorno: string;
    @Output() capacidad: string;
    @Output() medidas: string;
    @Output() bandejas: string;
    @Output() numBandejas: string;
    @Output() autolimpieza: string;
    @Output() clasfEnergia: string;
    @Output() functHorno: string;
    @Output() limpieza: string;
    @Output() interfaz: string;
    @Output() grill: string;
    @Output() ventilador: string;
    @Output() otros: string;
    @Input() lista: ListHornoOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.tipoHorno = this.lista.tipoHorno;
            this.capacidad = this.lista.capacidad;
            this.medidas = this.lista.medidas;
            this.bandejas = this.lista.bandejas;
            this.numBandejas = this.lista.numBandejas;
            this.autolimpieza = this.lista.autolimpieza;
            this.clasfEnergia = this.lista.clasfEnergia;
            this.functHorno = this.lista.functHorno;
            this.limpieza = this.lista.limpieza;
            this.interfaz = this.lista.interfaz;
            this.grill = this.lista.grill;
            this.ventilador = this.lista.ventilador;
            this.otros = this.lista.otros;
        }
    }
}