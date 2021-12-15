import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeSkillCertificateService } from '../employee-skill-certificate.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  employee:Employee = new Employee();
  constructor(private empservice:EmployeeSkillCertificateService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    return this.empservice.createEmployee(this.employee).subscribe(data => {
      console.log(this.employee+" ol");
      this.redirectToEmp();
    },
    error => console.log(error))
  }
  redirectToEmp(){
    this.router.navigate(['/employeeList']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
