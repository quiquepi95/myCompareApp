import { Component, OnInit, Output, Input } from "@angular/core";
import { ListFrigoOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-frigo',
    templateUrl: 'addFrigo.html'
})
export class AddFrigoComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() tipoFrigo: string;
    @Output() capBrutaRefrig: string;
    @Output() capBrutaCongel: string;
    @Output() capBrutaTotal: string;
    @Output() capUtilRefrig: string;
    @Output() capUtilCongel: string;
    @Output() capUtilTotal: string;
    @Output() tecnologia: string;
    @Output() ctrlTemp: string;
    @Output() tirador: string;
    @Output() indicador: string;
    @Output() funcIndicador: string;
    @Output() medidas: string;
    @Output() clasfEnergia: string;
    @Output() consumo: string;
    @Output() fecuencia: string;
    @Output() tension: string;
    @Output() alimentacion: string;
    @Input() lista: ListFrigoOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.tipoFrigo = this.lista.tipoFrigo;
            this.capBrutaRefrig = this.lista.capBrutaRefrig;
            this.capBrutaCongel = this.lista.capBrutaCongel;
            this.capBrutaTotal = this.lista.capBrutaTotal;
            this.capUtilRefrig = this.lista.capUtilRefrig;
            this.capUtilCongel = this.lista.capUtilCongel;
            this.capUtilTotal = this.lista.capUtilTotal;
            this.tecnologia = this.lista.tecnologia;
            this.ctrlTemp = this.lista.ctrlTemp;
            this.tirador = this.lista.tirador;
            this.indicador = this.lista.indicador;
            this.funcIndicador = this.lista.funcIndicador;
            this.medidas = this.lista.medidas;
            this.clasfEnergia = this.lista.clasfEnergia;
            this.consumo = this.lista.consumo;
            this.fecuencia = this.lista.fecuencia;
            this.tension = this.lista.tension;
            this.alimentacion = this.lista.alimentacion;
        }
    }
}