import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { SubcontractorListComponent } from './subcontractor-list/subcontractor-list.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { XerParserComponent } from './xer-parser/xer-parser.component';

const routes: Routes = [
  { path:  '', redirectTo:  'xer', pathMatch:  'full' },
  { path: 'home', component: HomeComponent, pathMatch:  'full'},
  { path:  'companies', component: CompaniesComponent, pathMatch:  'full' },
  { path:  'subcontractors', component:  SubcontractorListComponent, pathMatch:  'full'},
  { path: 'register', component: RegisterComponent, pathMatch:  'full'},
  { path:  'login',component:  LoginComponent, pathMatch:  'full'},
  { path: 'xer', component: XerParserComponent, pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
