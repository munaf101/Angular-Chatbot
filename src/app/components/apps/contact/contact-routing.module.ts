import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact1Component } from './contact1/contact1.component';

const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'contact-list-1',
                component: Contact1Component
            },
          
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }