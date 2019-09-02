import { Component, OnInit, Output, Input } from "@angular/core";
import { ListMicroOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-micro',
    templateUrl: 'addMicro.html'
})
export class AddMicroComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() tipoMicro: string;
    @Output() capacidad: string;
    @Output() peso: string;
    @Output() medidasExter: string;
    @Output() medidasInter: string;
    @Output() tipoApertura: string;
    @Output() diamPlato: string;
    @Output() platoGira: string;
    @Output() color: string;
    @Output() numPotencias: string;
    @Output() potencia: string;
    @Output() frecuencia: string;
    @Output() tension: string;
    @Output() alimentacion: string;
    @Output() otros: string;
    @Input() lista: ListMicroOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.tipoMicro = this.lista.tipoMicro;
            this.capacidad = this.lista.capacidad;
            this.peso = this.lista.peso;
            this.medidasExter = this.lista.medidasExter;
            this.medidasInter = this.lista.medidasInter;
            this.tipoApertura = this.lista.tipoApertura;
            this.diamPlato = this.lista.diamPlato;
            this.platoGira = this.lista.platoGira;
            this.color = this.lista.color;
            this.numPotencias = this.lista.numPotencias;
            this.potencia = this.lista.potencia;
            this.frecuencia = this.lista.frecuencia;
            this.tension = this.lista.tension;
            this.alimentacion = this.lista.alimentacion;
            this.otros = this.lista.otros;
        }
    }
}