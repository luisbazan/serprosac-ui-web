import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentComponent },
    { path: 'courses', component: CourseComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUNTING = RouterModule.forRoot(APP_ROUTES);
