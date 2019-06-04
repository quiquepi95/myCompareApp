import { Component, OnInit, Output, Input } from "@angular/core";
import { ListPCOption } from "../../../interfaces/lista";

@Component({
    selector: 'app-add-pc',
    templateUrl: 'addPC.html'
})
export class AddPcComponent implements OnInit {

    @Output() marca: string;
    @Output() modelo: string;
    @Output() precio: string;
    @Output() SO: string;
    @Output() RAM: string;
    @Output() ROM: string;
    @Output() procesador: string;
    @Output() grafica: string;
    @Output() usb2: string;
    @Output() usb3: string;
    @Output() usbc: string;
    @Output() dvd: string;
    @Output() ethernet: string;
    @Output() audio: string;
    @Output() video: string;
    @Output() peso: string;
    @Input() lista: ListPCOption;
    
    constructor(){}

    ngOnInit(){
        if ( this.lista !== null ){
            this.marca = this.lista.marca;
            this.modelo = this.lista.modelo;
            this.precio = this.lista.precio;
            this.SO = this.lista.SO;
            this.RAM = this.lista.RAM;
            this.ROM = this.lista.ROM;
            this.procesador = this.lista.procesador;
            this.grafica = this.lista.grafica;
            this.usb2 = this.lista.usb2;
            this.usb3 = this.lista.usb3;
            this.usbc = this.lista.usbc;
            this.dvd = this.lista.dvd;
            this.ethernet = this.lista.ethernet;
            this.audio = this.lista.audio;
            this.video = this.lista.video;
            this.peso = this.lista.peso;
        }
    }
}