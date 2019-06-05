import { Component, OnInit, Output, Input } from "@angular/core";
import { ListLavadoraOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-lavadora',
    templateUrl: 'addLavadora.html'
})
export class AddLavadoraComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() velocidad: string;
    @Output() clasfEnergia: string;
    @Output() tipoCarga: string;
    @Output() capTambor: string;
    @Output() capCarga: string;
    @Output() medidas: string;
    @Output() consumoAgua: string;
    @Output() consumoEnergia: string;
    @Output() frecuencia: string;
    @Output() extra: string;
    @Input() lista: ListLavadoraOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.velocidad = this.lista.velocidad;
            this.clasfEnergia = this.lista.clasfEnergia;
            this.tipoCarga = this.lista.tipoCarga;
            this.capTambor = this.lista.capTambor;
            this.capCarga = this.lista.capCarga;
            this.medidas = this.lista.medidas;
            this.consumoAgua = this.lista.consumoAgua;
            this.consumoEnergia = this.lista.consumoEnergia;
            this.frecuencia = this.lista.frecuencia;
            this.extra = this.lista.extra;
        }
    }
}