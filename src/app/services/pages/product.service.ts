import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../interfaces/product';
import { iStore, query } from '../store/iStore';
import { EngineStore } from '../store/engineStore';
import { ICRUDService } from '../service.index';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService implements ICRUDService {
  
  url:string;
  query:query;
  searchText$ = new Subject<string>();

  constructor(private store: EngineStore) { 
    this.url = 'products';//'https://demofirebase-97980.firebaseio.com/products.json';
    this.query =  {
      field: 'shortDescription',
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
  
  public add(product:Product):Observable<Object>{
    return this.store.add(this.url, product);
  }

  public remove(key$:string):Observable<Object>{
    return this.store.remove(this.url, key$);
  }

  public update(product:Product, key$:string):Observable<Object>{
    return this.store.update(this.url, product, key$);
  }

  public retrieve(key$:string):Observable<Object>{
    return this.store.retrieve(this.url, key$);
  }

  public search(termino):Observable<Product[]>{
    this.query.value = termino;
    return this.store.search(this.url, this.query);
  }

  retrieveAll(): Observable<any[]> {
    return this.store.search(this.url, this.query);
  }

}