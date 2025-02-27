import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'profile-1', component: Profile1Component},
            { path: 'profile-2', component: Profile2Component},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProfileRoutingModule { }