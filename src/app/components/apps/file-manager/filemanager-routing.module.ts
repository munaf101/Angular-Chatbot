import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManager1Component } from './file-manager1/file-manager1.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FilemanagaerDetailsComponent } from './filemanagaer-details/filemanagaer-details.component';

const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'file-manager',
                component: FileManager1Component
            },
            {
                path:'file-manager-list',
                component:FileManagerListComponent
            },
            {
                path:'file-manager-details',
                component:FilemanagaerDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilemanagerRoutingModule { }