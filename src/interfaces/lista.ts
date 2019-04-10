export class ListCocheOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    motor?: string;
    combustible?: string;
    cambio?: string;
    velocidades?: string;
    km?: string;
    puertas?: string;
    plazas?: string;
    consumo?: string;
    potencia?: string;
    cilindros?: string;
    medidas?: string;
    peso?: string;
    traccion?: string;
    extras?: string;

    constructor(lista: ListCocheOption){
        this.id = lista.id;
        this.categoria = lista.categoria;
        this.subcategoria = lista.subcategoria;
        this.marca = lista.marca;
        this.modelo = lista.modelo;
        this.precio = lista.precio;
        this.motor = lista.motor;
        this.combustible = lista.combustible;
        this.cambio = lista.cambio;
        this.velocidades = lista.velocidades;
        this.km = lista.km;
        this.puertas = lista.puertas;
        this.plazas = lista.plazas;
        this.consumo = lista.consumo;
        this.potencia = lista.potencia;
        this.cilindros = lista.cilindros;
        this.medidas = lista.medidas;
        this.peso = lista.peso;
        this.traccion = lista.traccion;
        this.extras = lista.extras;
    }
}

export class ListMotoOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    motor?: string;
    combustible?: string;
    cambio?: string;
    velocidades?: string;
    km?: string;
    plazas?: string;
    consumo?: string;
    potencia?: string;
    cilindrada?: string;
    cilindros?: string;
    medidas?: string;
    peso?: string;
    extras?: string;

        constructor(lista: ListMotoOption){
            this.id = new Date().getTime();
            this.categoria = lista.categoria;
            this.subcategoria = lista.subcategoria;
            this.marca = lista.marca;
            this.modelo = lista.modelo;
            this.precio = lista.precio;
            this.motor = lista.motor;
            this.combustible = lista.combustible;
            this.cambio = lista.cambio;
            this.velocidades = lista.velocidades;
            this.km = lista.km;
            this.plazas = lista.plazas;
            this.consumo = lista.consumo;
            this.potencia = lista.potencia;
            this.cilindrada = lista.cilindrada;
            this.cilindros = lista.cilindros;
            this.medidas = lista.medidas;
            this.peso = lista.peso;
            this.extras = lista.extras;
        }
}

export class ListPCOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    SO?: string;
    RAM?: string;
    ROM?: string;
    procesador?: string;
    grafica?: string;
    usb2?: string;
    usb3?: string;
    usbc?: string;
    dvd?: string;
    ethernet?: string;
    audio?: string;
    video?: string;
    peso?: string;

        constructor(lista: ListPCOption){
            this.id = new Date().getTime();
            this.categoria = lista.categoria;
            this.subcategoria = lista.subcategoria;
            this.marca = lista.marca;
            this.modelo = lista.modelo;
            this.precio = lista.precio;
            this.SO = lista.SO;
            this.RAM = lista.RAM;
            this.ROM = lista.ROM;
            this.procesador = lista.procesador;
            this.grafica = lista.grafica;
            this.usb2 = lista.usb2;
            this.usb3 = lista.usb3;
            this.usbc = lista.usbc;
            this.dvd = lista.dvd;
            this.ethernet = lista.ethernet;
            this.audio = lista.audio;
            this.video = lista.video;
            this.peso = lista.peso;
        }
}