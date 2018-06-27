import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

/* import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { StudentFormComponent } from './components/student/student-form/student-form.component';
import { CourseComponent } from './components/course/course.component';
import { ProductComponent } from './components/product/product.component';
 */

const APP_ROUTES: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
    /* { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentComponent },
    { path: 'students/:id', component: StudentFormComponent },
    { path: 'courses', component: CourseComponent },
    { path: 'products', component: ProductComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } */
];

export const APP_ROUNTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
