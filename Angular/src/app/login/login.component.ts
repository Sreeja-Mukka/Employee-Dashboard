import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string
  password!:string
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  getUserType(){
    if(this.username==="Sreeja" && this.password==="1234"){
      this.router.navigate(['/empShow' , 2]);
    }
    else if(this.username==="ravi" && this.password==="1234"){
      this.router.navigate(['/employeeList']);
    }
  }


}
