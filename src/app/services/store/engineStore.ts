import { iStore, query } from "./iStore";
import { Observable } from "rxjs/Observable";

export abstract class EngineStore implements iStore {
    
    abstract add(url: string, object: any): Observable<Object>;

    abstract remove(url: string, key$: string): Observable<Object>;

    abstract update(url: string, object: any, key$: string): Observable<Object>;

    abstract retrieve(url: string, key$: string): Observable<Object>;

    abstract search(url:string, query:query): Observable<any[]>;
}