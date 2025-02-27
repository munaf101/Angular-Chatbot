import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'blog-1', component: Blog1Component},
            { path: 'blog-2', component: Blog2Component},
            { path: 'blog-3', component: Blog3Component},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class BlogRoutingModule { }