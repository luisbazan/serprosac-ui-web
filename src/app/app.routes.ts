import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'student', component: StudentComponent },
    { path: 'course', component: CourseComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forChild(app_routes);
