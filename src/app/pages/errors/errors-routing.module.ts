import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error401Component } from './error401/error401.component';
import { Error503Component } from './error503/error503.component';

const routes: Routes = [
  {
    path: '',
    children: [
      
      { path: 'Error-401', component: Error401Component },
      { path: 'Error-503', component: Error503Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ErrorRoutingModule { }
