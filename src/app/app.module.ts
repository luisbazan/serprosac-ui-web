import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentComponent,
    SearchComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,    
    NgbModule.forRoot(),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
