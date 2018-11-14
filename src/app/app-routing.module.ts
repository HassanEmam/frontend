import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { SubcontractorListComponent } from './subcontractor-list/subcontractor-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
  {
    path:  'companies',
    component:  CompaniesComponent
  },
  {
    path:  'view_subcontractors',
    component:  SubcontractorListComponent
  },
  {
    path:  'login',
    component:  LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
