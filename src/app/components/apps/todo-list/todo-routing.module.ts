import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoList1Component } from './todo-list1/todo-list1.component';
import { TodoList2Component } from './todo-list2/todo-list2.component';


const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'todo-list-1',
                component: TodoList1Component
            },
            {
                path:'todo-list-2',
                component:TodoList2Component
            },
          
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodolistRoutingModule { }