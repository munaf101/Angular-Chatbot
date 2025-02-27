import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { ContentStyleComponent } from './shared/components/layouts/content-style/content-style.component';
import { ContentComponent } from './shared/components/layouts/content/content.component';
import { FullContentComponent } from './shared/components/layouts/full-content/full-content.component';
import { content } from './shared/routes/content-routes';
import { custom_style } from './shared/routes/custom-content-routes';
import { full } from './shared/routes/full-content-routes';
import { RegisterComponent } from './authentication/register/register.component';
import { authguardGuard } from './authguard/authguard.guard';
import { FilterSortPaginationComponent } from './components/tables/data-table/filter-sort-pagination/filter-sort-pagination.component';

const routes: Routes = [
  { path: '', redirectTo:'auth/login', pathMatch: 'full',},
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: '', component: ContentComponent, children: content 
    // , canActivate: [authguardGuard] 
  },
  { path: '', component: FullContentComponent, children: full 
    // , canActivate: [authguardGuard]
  },
  { path: '', component: ContentStyleComponent, children: custom_style 
    // , canActivate: [authguardGuard]
  },
  { path: '**', redirectTo: '' },

  ///
  // { path: 'view_questions', component: FilterSortPaginationComponent },

];


@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
