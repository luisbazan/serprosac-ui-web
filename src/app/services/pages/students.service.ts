import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../interfaces/student';
import { AbstractCRUDServices } from '../abstractCRUD/abstractCRUDServices';
import { ICRUDService } from '../service.index';
import { query } from '../store/iStore';
import { Subject } from 'rxjs';
import { EngineStore } from '../store/engineStore';
import { Location } from '../../models/location';

@Injectable()
export class StudentsService implements ICRUDService {
  url:string;
  query:query;
  searchText$ = new Subject<string>();

  constructor(private store: EngineStore) { 
    this.url = 'students';//'https://demofirebase-97980.firebaseio.com/products.json';
    this.query =  {
      field: 'firstName',
      operator: '>=',
      value : ''
    }
  }

  getObjectUrl():string {
    return //this.rootFireBase + 'products';
  }

  getObjectsUrl():string {
    return //this.rootFireBase + 'products.json';
  }
  
  public add(student:Student):Observable<Object>{
    student.location = {
      cod_dep_inei
      :
      "02",
      cod_dep_reniec
      :
      "02",
      cod_dep_sunat
      :
      "02",
      cod_prov_inei
      :
      "0218",
      cod_prov_reniec
      :
      "0213",
      cod_prov_sunat
      :
      "0218",
      cod_ubigeo_inei
      :
      "021804",
      cod_ubigeo_reniec
      :
      "021303",
      cod_ubigeo_sunat
      :
      "021804",
      desc_dep_inei
      :
      "ANCASH",
      desc_dep_reniec
      :
      "ANCASH",
      desc_dep_sunat
      :
      "ANCASH",
      desc_prov_inei
      :
      "SANTA",
      desc_prov_reniec
      :
      "SANTA",
      desc_prov_sunat
      :
      "SANTA",
      desc_ubigeo_inei
      :
      "MACATE",
      desc_ubigeo_reniec
      :
      "MACATE",
      desc_ubigeo_sunat
      :
      "MACATE"
  };
    return this.store.add(this.url, student);
  }

  public remove(key$:string):Observable<Object>{
    return this.store.remove(this.url, key$);
  }

  public update(student:Student, key$:string):Observable<Object>{
    return this.store.update(this.url, student, key$);
  }

  public retrieve(key$:string):Observable<Object>{
    return this.store.retrieve(this.url, key$);
  }

  public search(termino):Observable<any[]>{
    this.query.value = termino;
    return this.store.search(this.url, this.query);
  }

  retrieveAll(): Observable<any[]> {
    return this.store.search(this.url, this.query);
  }

}
