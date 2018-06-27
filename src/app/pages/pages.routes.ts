import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: "Dashboard"} },
            { path: 'studentList', component: StudentComponent , data: { title: "Lista de Alumnos"}},
            { path: 'student/:id', component: StudentFormComponent , data: { title: "Mantenimiento Alumno"}},
            { path: 'courseList', component: CourseComponent , data: { title: "Lista de Cursos"}},
            { path: 'course/:id', component: CourseFormComponent , data: { title: "Mantenimiento Curso"}},
            { path: 'productList', component: ProductComponent , data: { title: "Lista de Productos"}},
            { path: 'product/:id', component: ProductFormComponent , data: { title: "Mantenimiento Producto"}},
            { path: 'account-settings', component: AccoutSettingComponent, data: { title: "Ajuste de Tema"} },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

export const PAGE_ROUTES = RouterModule.forRoot(APP_ROUTES);
