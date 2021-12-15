import { EmployeeSkillCertificateService } from './../employee-skill-certificate.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { Skill } from '../Skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  id!:number;
  skill:Skill = new Skill();

  constructor(private empSer:EmployeeSkillCertificateService ,  private router : Router , private route:ActivatedRoute) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.id = +params['id'];

  });
  }

  addSkill(){
    return this.empSer.createSkill(this.skill,this.id).subscribe( data =>{
      console.log(this.empSer.getEmployeeById(this.id))
        console.log("did it")
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/empShow' , this.id]);
  }
}
