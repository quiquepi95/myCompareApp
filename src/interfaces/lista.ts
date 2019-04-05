export class Lista {
    listaCoche?: ListCocheOption[];
    listaMoto?: ListMotoOption[];
    constructor(
        listaCoche?: ListCocheOption,
        listaMoto?: ListMotoOption
        ){
            this.listaCoche.push(listaCoche);
            this.listaMoto.push(listaMoto);
        }
}

export class ListCocheOption {
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