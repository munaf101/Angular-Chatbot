import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormElementsSizesComponent } from './form-elements-sizes/form-elements-sizes.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
// import { NgWizardModule } from 'ng-wizard';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { TreeviewModule } from 'ngx-treeview';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxEditorModule } from 'ngx-editor';
import { FileuploadService } from './form-advanced/fileupload.service';
import { FormElementsService } from './form-elements/form-elements.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { AccordionWizardComponent } from './form-wizard/accordion-wizard/accordion-wizard.component';
import { BasicContentComponent } from './form-wizard/basic-content/basic-content.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };


@NgModule({
  declarations: [FormAdvancedComponent, FormEditorComponent, FormElementsComponent, FormElementsSizesComponent, FormTreeviewComponent, FormWizardComponent,AccordionWizardComponent,BasicContentComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgSelectModule,
    NgbModule,
    // CKEditorModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    // ArchwizardModule,
    // NgWizardModule,
    // AngularMultiSelectModule,
    // NgxDropzoneModule,
    DropzoneModule,
    // NgxIntlTelInputModule,
    // TreeviewModule.forRoot(),
    HighlightModule,
    NgxEditorModule,
    DropzoneModule,
    NgxMatIntlTelInputComponent,
    MaterialModuleModule,
    QuillModule,
    SharedModule
    // HttpClientModule
  ],

  providers: [
    FormElementsService,
    FileuploadService,
    ToastrService,
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],

})
export class FormElementsModule { }
