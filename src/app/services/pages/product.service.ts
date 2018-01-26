import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractCRUDServices } from '../abstractCRUD/abstractCRUDServices';
import { Product } from '../../interfaces/product';

@Injectable()
export class ProductService extends AbstractCRUDServices {

  constructor(private _httpClient: HttpClient) { 
    super(_httpClient);
  }

  getObjectUrl():string {
    return this.rootFireBase + 'products';
  }

  getObjectsUrl():string {
    return this.rootFireBase + 'products.json';
  }
  
  public add(student:Product):Observable<Object>{
    return super.add(student);
  }

  public remove(key$:string):Observable<Object>{
    return super.remove(key$);
  }

  public update(student:Product, key$:string):Observable<Object>{
    return super.update(student, key$);
  }

  public retrieve(key$:string):Observable<Product>{
    return super.retrieve(key$);
  }

  public retrieveAll():Observable<Product[]>{
    return super.retrieveAll();
  }

}
