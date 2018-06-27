import { Injectable, Inject, SkipSelf } from "@angular/core";
import { iStore, query } from "./iStore";
import { Observable } from "rxjs/Observable";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { EngineStore } from "./engineStore";
import { Audit } from "../../interfaces/audit";

@Injectable()
export class FireBaseStore extends EngineStore {
    
    private itemsCollection: AngularFirestoreCollection<any>;
    userLogin: string = 'lbazan';
    
    constructor(private afs: AngularFirestore) {
      super();
    }

    add(url: string, object: any): Observable<Object> {
        this.setAudit(object);
        console.log(object);
        
        return Observable.fromPromise(this.itemsCollection.add(object).then(
            data=> { 
                object.key$ = data.id;
                return object;
            }).catch(error => this.handleError(error)));
    }

    remove(url: string, key$: string): Observable<any> {        
        return Observable.fromPromise(
            this.itemsCollection.doc(key$).delete().then(
                item=> {
                    return key$;
                }
            ).catch(error => this.handleError(error))
        );
    }

    update(url: string, object: any, key$: string): Observable<Object> {
        return Observable.fromPromise(this.itemsCollection.doc(key$).update(object).then(
            data=> {
                return object;
            }).catch(error => this.handleError(error)));
    }

    retrieve(url: string, key$: string): Observable<Object> {
        return this.itemsCollection.doc(key$).valueChanges();
    }
    
    search(url:string, query:query): Observable<any[]> {
        
        this.itemsCollection = this.afs.collection<any>(url, 
            ref => ref.where(query.field, query.operator, query.value));
            
        return this.itemsCollection.snapshotChanges().map(actions => {
            return actions.map(a => {
                let data = a.payload.doc.data();
                data.key$ = a.payload.doc.id;
                console.log(data)
              return data;
            });
          });
    }
    
    private setAudit(data:any){

        if(data.audit!=null) {
          data.audit.updatedby = this.userLogin,
          data.audit.updatedDate = new Date()
        } else {
          let auditUser:Audit = {
            createdby : this.userLogin,
            createdDate : new Date()
          };
          data.audit = auditUser;
        }
      }

    private handleError(error) {
        console.log(error);
    }
  }