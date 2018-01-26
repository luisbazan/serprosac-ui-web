import { Audit } from '../interfaces/audit';
import { Product } from '../interfaces/product';

export interface Course extends Product {
    code: string;
    title: string;
    shortDescription: string;
    description: string;
    ranking: number;
    type:TypeCourseEnum;
    state: StateCourseEnum;
}

export enum TypeCourseEnum {
    VIRTUAL = "V",
    PRESENCIAL = "P"
}

export enum StateCourseEnum {
    POR_INICIAR = "PI",
    INICIADO = "IN",
    TERMINADO = "TE"
}