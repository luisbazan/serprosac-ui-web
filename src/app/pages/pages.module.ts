import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from '../modules/alert/alert.module';

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
import { FilterPipe } from '../pipe/filter.pipe';
import { HighlightPipe } from '../pipe/highlight.pipe';
import { FormFieldInputComponent } from '../components/ui/forms/form-field-input/form-field-input.component';
import { FormFieldSelectComponent } from '../components/ui/forms/form-field-select/form-field-select.component';
import { FormFieldTextareaComponent } from '../components/ui/forms/form-field-textarea/form-field-textarea.component';
import { ZipcodeFormComponent } from '../components/zipcode-form/zipcode-form.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        StudentComponent,
        ToolbarComponent,
        DatatableComponent,
        ModalFormComponent,
        StudentFormComponent,
        ConfirmModalComponent,
        AccoutSettingComponent,
        FormFieldInputComponent,
        FormFieldSelectComponent,
        FormFieldTextareaComponent,
        ZipcodeFormComponent,
        FilterPipe,
        HighlightPipe
    ],
    exports: [
        DashboardComponent,
        StudentComponent,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AlertModule.forRoot(),
        PAGE_ROUTES
    ]
})

export class PagesModule {}