import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student/student-form/student-form.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: "Dashboard"} },
            { path: 'studentList', component: StudentComponent , data: { title: "Lista de Alumnos"}},
            { path: 'student/:id', component: StudentFormComponent , data: { title: "Mantenimiento Alumno"}},
            { path: 'account-settings', component: AccoutSettingComponent, data: { title: "Ajuste de Tema"} },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

export const PAGE_ROUTES = RouterModule.forRoot(APP_ROUTES);
