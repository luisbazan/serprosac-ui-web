import { Observable } from 'rxjs/Observable';

export interface iStore {
  add(url:string, object:any):Observable<Object>;
  remove(url:string, key$:string):Observable<Object>;
  update(url:string, object:any, key$:string):Observable<Object>;
  retrieve(url:string, key$:string):Observable<Object>;
  search(url:string, query:query):Observable<any[]>;
}

export interface query {
  field:string;
  operator:"<" | "<=" | "==" | ">" | ">=";
  value:any;
}