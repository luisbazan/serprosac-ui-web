import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  label:string = '';

  constructor(private router:Router,
  public title: Title) { 
    this.getDataRoute()
    .subscribe( data => {
      this.label = data.title;
      this.title.setTitle(data.title);
    });
  }

  getDataRoute() {
    return this.router.events
    .filter( event=> event instanceof ActivationEnd )
    .filter( (event:ActivationEnd)=> event.snapshot.firstChild === null )
    .map((event:ActivationEnd)=> event.snapshot.data);    
  }

  ngOnInit() {
  }

}
