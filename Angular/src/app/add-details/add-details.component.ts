import { EmployeeSkillCertificateService } from './../employee-skill-certificate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { Skill } from '../Skill';
import { Certificate } from '../Certificate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  id!:number
  employee : Employee = new Employee();
  skills!:Skill[]
  constructor(private route:ActivatedRoute , private empService:EmployeeSkillCertificateService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });

    
  }

  
  
  
}
