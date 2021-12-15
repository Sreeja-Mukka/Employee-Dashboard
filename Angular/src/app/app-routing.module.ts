import { AddDetailsComponent } from './add-details/add-details.component';
import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "employeeList" , component:EmployeeListComponent},
  {path:"editEmp/:id" , component:EditEmployeeComponent},
  {path: "addSkill/:id" , component:AddSkillComponent},
  {path: "addCert/:id" , component:AddCertificateComponent},
  {path: "addEmp" , component:AddEmployeeComponent},
  {path: "empDetails/:id" , component:AddDetailsComponent},
  {path:"empShow/:id" , component:EmpShowComponent},
  {path:"" , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
