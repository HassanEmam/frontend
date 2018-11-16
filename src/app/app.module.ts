import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesComponent } from './companies/companies.component';
import { SubcontractorListComponent } from './subcontractor-list/subcontractor-list.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    SubcontractorListComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
