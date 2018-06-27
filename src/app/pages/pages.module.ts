import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from '../modules/alert/alert.module';
import { PipesModule } from '../pipes/pipes.module';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { StudentComponent } from './student/student.component';

import { PAGE_ROUTES } from './pages.routes';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { DatatableComponent } from '../components/ui/datatable/datatable.component';
import { ModalFormComponent } from '../components/modal-form/modal-form.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { ConfirmModalComponent } from '../components/ui/confirm-modal/confirm-modal.component';
import { FormFieldInputComponent } from '../components/ui/forms/form-field-input/form-field-input.component';
import { FormFieldSelectComponent } from '../components/ui/forms/form-field-select/form-field-select.component';
import { FormFieldTextareaComponent } from '../components/ui/forms/form-field-textarea/form-field-textarea.component';
import { ZipcodeFormComponent } from '../components/zipcode-form/zipcode-form.component';
import { CourseComponent } from './course/course.component';
import { ProductComponent } from './product/product.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        StudentComponent,
        StudentFormComponent,
        CourseComponent,
        CourseFormComponent,
        ProductComponent,
        ProductFormComponent,
        ToolbarComponent,
        DatatableComponent,
        ModalFormComponent,
        ConfirmModalComponent,
        AccoutSettingComponent,
        FormFieldInputComponent,
        FormFieldSelectComponent,
        FormFieldTextareaComponent,
        ZipcodeFormComponent
    ],
    exports: [
        DashboardComponent,
        StudentComponent,
        CourseComponent,
        ProductComponent,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AlertModule.forRoot(),
        PipesModule,
        PAGE_ROUTES
    ]
})

export class PagesModule {}