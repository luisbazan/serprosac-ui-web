import { Injectable } from "@angular/core";
import { iStore, query } from "./iStore";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EngineStore } from "./engineStore";

@Injectable()
export class HttpClientStore extends EngineStore {
    
    constructor(private http: HttpClient) {
      super();
    }

    add(url: string, object: any): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    remove(url: string, key$: string): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    update(url: string, object: any, key$: string): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    retrieve(url: string, key$: string): Observable<Object> {
        throw new Error("Method not implemented.");
    }
    search(url:string, query:query): Observable<any[]> {
        let headers = new HttpHeaders({
            'Content-Type':'application/json'
          });
          return this.http.get(url).map(
            (resp: any[]) => {
              var list:any[] = [];
              
              for (let item in resp) {
                let value:any = resp[item];
                value.key$ = item;
                list.push(value);
              }
              return list;
            }
          );
    }

}