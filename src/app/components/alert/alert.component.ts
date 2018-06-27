import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { AlertService, AlertType, IAlert } from '../../services/service.index';

@Component({
  selector: 'app-alert',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {
  alertconfig:IAlert = { id:0, type:AlertType.SUCCESS, message:"" };
  subscription: Subscription;

  constructor(private _alertService: AlertService) { 
    this.subscription = _alertService.getAlertConfig().subscribe(alertconfig => { this.alertconfig = alertconfig; });
    debounceTime.call(_alertService.getAlertConfig(), 4000).subscribe(() => this.alertconfig.message = null);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

