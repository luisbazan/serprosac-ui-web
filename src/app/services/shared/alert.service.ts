import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Injectable()
export class AlertService {
  alertConfig:IAlert = { id:0, type:AlertType.SUCCESS, message:"" };
  private subject = new Subject<any>();
  private titleMan = "Resultado Accion";

  clearAlertConfig() {
      this.subject.next();
  }

  getAlertConfig(): Observable<any> {
      return this.subject.asObservable();
  }

  public showSuccessMessage(message:string) {    
    this.alertConfig.type = AlertType.SUCCESS;
    this.alertConfig.message = message;
    this.alertConfig.title = this.titleMan;
    this.subject.next(this.alertConfig);
  }

  public showErrorMessage(message:string) {    
    this.alertConfig.type = AlertType.DANGER;
    this.alertConfig.message = message;
    this.alertConfig.title = this.titleMan;
    this.subject.next(this.alertConfig);
  }
}

export interface IAlert {
  id: number;
  type: AlertType;
  message: string;
  title?: string;
}

export enum AlertType {
  SUCCESS="success",
  INFO="info",
  WARNING="warning",
  DANGER="danger"
}
