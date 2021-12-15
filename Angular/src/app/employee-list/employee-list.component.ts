import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeSkillCertificateService } from '../employee-skill-certificate.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!:Employee[];
  // searchArr:Employee[]=[...this.employees];
  search!:string;
  empcount:number=0;
  skillcount:number=0;
  certcount:number=0;
  constructor(private empService:EmployeeSkillCertificateService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
 
  private getEmployees():void{
    this.empService.getEmployee().subscribe(data => {
      this.employees = data;
      console.log(data);
      this.counts();
    });
  }

  public counts():void{
    if(this.employees!=null){
      this.empcount=this.employees.length;
      console.log("works");
     
      
      this.employees.forEach(element => {
        
        if(element.skillSet!=undefined){
          console.log("works inside");
          this.skillcount+=element.skillSet.length;
        }
        if(element.certSet!=undefined){
          this.certcount+=element.certSet.length;
        }
      });
    }
  }

  deleteEmployee(id:number){
    this.empService.deleteEmp(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

  detailsOfEmployee(id: number){
    this.router.navigate(['empDetails', id]);
  }
  submitted() {
    this.employees.forEach(element => {
      if(element.empname===this.search){
        console.log("taada");
        this.router.navigate(['empDetails', element.eid]);
      }
      // else if(element.skillSet!=undefined){
      //   element.skillSet.forEach(x => {
      //     if(x.skillName.toLowerCase===this.search.toLowerCase){
      //       this.router.navigate(['empDetails', element.eid]);
      //     }
      //     else if(x.skillCat.toLowerCase==this.search.toLowerCase){
      //       this.router.navigate(['empDetails', element.eid]);
      //     }
      //   });
      // }
      // else if(element.certSet!=undefined){
      //   element.certSet.forEach(x => {
      //     if(x.certName.toLowerCase===this.search.toLowerCase){
      //       this.router.navigate(['empDetails', element.eid]);
      //     }
      //     else if(x.certCategory.toLowerCase==this.search.toLowerCase){
      //       this.router.navigate(['empDetails', element.eid]);
      //     }
      //   });
      // }
    });
  }
}
