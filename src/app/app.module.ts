import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Routes
import { APP_ROUNTING } from './app.routes';

//Services
import { StudentsService } from './services/students.service';
import { ConfigurationService } from './services/configuration.service';

//External components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StudentComponent,
    SearchComponent,
    CourseComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    APP_ROUNTING
  ],
  providers: [
    StudentsService,
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
