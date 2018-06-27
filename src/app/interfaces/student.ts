import { Location } from '../models/location';
import { Audit } from '../interfaces/audit';
import { SexoEnum, StatusStudentEnum, StateStudentEnum } from '../enums/person.enum';

export interface Student {
    firstName: string;
    lastName: string;
    dni: string;
    sexo: SexoEnum;
    nroCelular: string;
    nroCasa: string;
    email: string;
    moodleUser: string;
    moodlePwd: string;
    address: string;
    location: any;//Location;
    status: StatusStudentEnum;
    state: StateStudentEnum;
    audit?: Audit;
    key$?: string; 
}
