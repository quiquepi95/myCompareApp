/* VEHÍCULO */
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

/* ELECTRODOMÉSTICOS */
export class ListLavadoraOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    velocidad?: string;
    clasfEnergia?: string;
    tipoCarga?: string;
    capTambor?: string;
    capCarga?: string;
    medidas?: string;
    consumoAgua?: string;
    consumoEnergia?: string;
    frecuencia?: string;
    extra?: string;

        constructor(lista: ListLavadoraOption){
            this.id = lista.id;
            this.categoria = lista.categoria;
            this.subcategoria = lista.subcategoria;
            this.marca = lista.marca;
            this.modelo = lista.modelo;
            this.precio = lista.precio;
            this.velocidad = lista.velocidad;
            this.clasfEnergia = lista.clasfEnergia;
            this.tipoCarga = lista.tipoCarga;
            this.capTambor = lista.capTambor;
            this.capCarga = lista.capCarga;
            this.medidas = lista.medidas;
            this.consumoAgua = lista.consumoAgua;
            this.consumoEnergia = lista.consumoEnergia;
            this.frecuencia = lista.frecuencia;
            this.extra = lista.extra;
        }
}

export class ListFrigoOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    tipoFrigo?: string;
    capBrutaRefrig?: string;
    capBrutaCongel?: string;
    capBrutaTotal?: string;
    capUtilRefrig?: string;
    capUtilCongel?: string;
    capUtilTotal?: string;
    tecnologia?: string;
    ctrlTemp?: string;
    tirador?: string;
    indicador?: string;
    funcIndicador?: string;
    medidas?: string;
    clasfEnergia?: string;
    consumo?: string;
    fecuencia?: string;
    tension?: string;
    alimentacion?: string;

        constructor(lista: ListFrigoOption){
            this.id = lista.id;
            this.categoria = lista.categoria;
            this.subcategoria = lista.subcategoria;
            this.marca = lista.marca;
            this.modelo = lista.modelo;
            this.precio = lista.precio;
            this.capBrutaRefrig = lista.capBrutaRefrig;
            this.capBrutaCongel = lista.capBrutaCongel;
            this.capBrutaTotal = lista.capBrutaTotal;
            this.capUtilRefrig = lista.capUtilRefrig;
            this.capUtilCongel = lista.capUtilCongel;
            this.capUtilTotal = lista.capUtilTotal;
            this.tecnologia = lista.tecnologia;
            this.ctrlTemp = lista.ctrlTemp;
            this.tirador = lista.tirador;
            this.indicador = lista.indicador;
            this.funcIndicador = lista.funcIndicador;
            this.medidas = lista.medidas;
            this.clasfEnergia = lista.clasfEnergia;
            this.consumo = lista.consumo;
            this.fecuencia = lista.fecuencia;
            this.tension = lista.tension;
            this.alimentacion = lista.alimentacion;
        }
}

export class ListLavavajillasOption {
    id: number;
    categoria: string;
    subcategoria: string;
    marca: string;
    modelo?: string;
    precio?: string;
    tipo?: string;
    eficaciaLavado?: string;
    eficaciaSecado?: string;
    capacidad?: string;
    numProgramas?: string;
    tecnologia?: string;
    indicador?: string;
    indicaciones?: string;
    numTemp?: string;
    sistSeguridad?: string;
    nivelRuido?: string;
    cestas?: string;
    bandejaCubiertos?: string;
    medidas?: string;
    clasfEnergia?: string;
    consumoAgua?: string;
    consumoEnergia?: string;
    tension?: string;

        constructor(lista: ListLavavajillasOption){
            this.id = lista.id;
            this.categoria = lista.categoria;
            this.subcategoria = lista.subcategoria;
            this.marca = lista.marca;
            this.modelo = lista.modelo;
            this.precio = lista.precio;
            this.tipo = lista.tipo;
            this.eficaciaLavado = lista.eficaciaLavado;
            this.eficaciaSecado = lista.eficaciaSecado;
            this.capacidad = lista.capacidad;
            this.numProgramas = lista.numProgramas;
            this.tecnologia = lista.tecnologia;
            this.indicador = lista.indicador;
            this.indicaciones = lista.indicaciones;
            this.numTemp = lista.numTemp;
            this.sistSeguridad = lista.sistSeguridad;
            this.nivelRuido = lista.nivelRuido;
            this.cestas = lista.cestas;
            this.bandejaCubiertos = lista.bandejaCubiertos;
            this.medidas = lista.medidas;
            this.clasfEnergia = lista.clasfEnergia;
            this.consumoAgua = lista.consumoAgua;
            this.consumoEnergia = lista.consumoEnergia;
            this.tension = lista.tension;
        }
}

/* ELECTRÓNICA */
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
            this.id = lista.id;
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