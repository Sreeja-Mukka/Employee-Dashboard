import { Certificate } from './../Certificate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSkillCertificateService } from '../employee-skill-certificate.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {

  id!:number;
  cer:Certificate = new Certificate();
  constructor(private empSer:EmployeeSkillCertificateService ,  private router : Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
  });
  }

  addCert(){
    return this.empSer.createCertificate(this.cer,this.id).subscribe( data =>{
        console.log("did it")
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/empShow',this.id]);
  }


}
