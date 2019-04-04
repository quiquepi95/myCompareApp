export interface Lista {
    listaCoche?: ListCocheOption[];
}

export interface ListCocheOption {
    categoria?: string;
    subcategoria?: string;
    marca?: string;
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
}