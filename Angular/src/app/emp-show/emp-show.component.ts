import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from '../Certificate';
import { Employee } from '../Employee';
import { EmployeeSkillCertificateService } from '../employee-skill-certificate.service';
import { Skill } from '../Skill';

@Component({
  selector: 'app-emp-show',
  templateUrl: './emp-show.component.html',
  styleUrls: ['./emp-show.component.css']
})
export class EmpShowComponent implements OnInit {

  id:number
  sid:number
  employee : Employee = new Employee();
  skills:Skill[];
  certs:Certificate[];
  // original:Employee= {eid:0,empname:"",   
  //   emprole:"",skillSet:[],certSet:[]};
  // employee : Employee ={ ...this.original }
  
  constructor(private route:ActivatedRoute , private empService:EmployeeSkillCertificateService , private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']; 
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });

    
    this.empService.getAllSkills(this.id).subscribe(data => {
      console.log(data);
      this.skills = data;
    })

    this.empService.getAllCerts(this.id).subscribe(data => {
      console.log(data);
      this.certs = data;
    })
  }
  
  updateEmployee(id: number){
    this.router.navigate(['/editEmp', id]);
  } 

  goSkills(){
    this.router.navigate(['addSkill', this.id])
  }
  goCert(){
    this.router.navigate(['addCert' , this.id])
  }



}
