import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractCRUDServices } from '../abstractCRUD/abstractCRUDServices';
import { Course } from '../../interfaces/course';
import { query } from '../store/iStore';
import { Subject } from 'rxjs';
import { EngineStore } from '../store/engineStore';
import { ICRUDService } from '../service.index';

@Injectable()
export class CourseService implements ICRUDService {

  url:string;
  query:query;
  searchText$ = new Subject<string>();

  constructor(private store: EngineStore) { 
    this.url = 'courses';//'https://demofirebase-97980.firebaseio.com/products.json';
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
  
  public add(course:Course):Observable<Object>{
    return this.store.add(this.url, course);
  }

  public remove(key$:string):Observable<Object>{
    return this.store.remove(this.url, key$);
  }

  public update(course:Course, key$:string):Observable<Object>{
    return this.store.update(this.url, course, key$);
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
