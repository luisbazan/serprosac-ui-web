import { Audit } from '../interfaces/audit';

export interface Product {
    code: string;
    shortDescription: string;
    description: string;
    listPrice:number;
    currentPrice:number;
    status:StatusProductEnum;
    category:CategoryProductEnum;
    audit?:Audit;
    key$?:string;
}

export enum StatusProductEnum {
    ACTIVO = "A",
    INACTIVO = "I"
}

export enum CategoryProductEnum {
    NUEVO = "N",
    BEST_SELLER = "B",
    ANTIGUO = "O"
}
