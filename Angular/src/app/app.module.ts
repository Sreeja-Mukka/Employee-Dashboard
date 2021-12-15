import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { FilterPipe } from './add-details/filter.pipe';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    AddSkillComponent,
    AddCertificateComponent,
    AddEmployeeComponent,
    AddDetailsComponent,
    FilterPipe,
    EmpShowComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
