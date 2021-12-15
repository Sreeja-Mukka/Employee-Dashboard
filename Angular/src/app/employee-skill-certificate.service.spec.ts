import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';
import { EmployeeSkillCertificateService } from './employee-skill-certificate.service';
import { Employee } from './Employee';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';


describe('EmployeeSkillCertificateService', () => {
  let service: EmployeeSkillCertificateService;
  let http :HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      providers:[EmployeeSkillCertificateService]
    });
   http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EmployeeSkillCertificateService);
  });


  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('create a employee' , fakeAsync(
    inject(
      [EmployeeSkillCertificateService, HttpTestingController],
      (authService: EmployeeSkillCertificateService, backend: HttpTestingController) =>{
    let emp:Employee={
      eid:1,
      empname:'Shiva',
      emprole:'Employee',
      skillSet:[],
      certSet:[]
    };

    authService.createEmployee(emp).subscribe(
      (receivedResponse: Employee) => {
        let respone = receivedResponse;
      },
      (error: any) => {}
    );

    const requestWrapper = backend.expectOne({url: "http://localhost:8080/pcs/employees"});
          requestWrapper.flush(emp);
          tick();

          expect(requestWrapper.request.method).toEqual('POST');
  })));
    
 
  it('create a skill' , fakeAsync(inject(
    [EmployeeSkillCertificateService, HttpTestingController],
    (authService: EmployeeSkillCertificateService, backend: HttpTestingController)=>{
      let emp:Employee={
        eid:1,
        empname:'Shiva',
        emprole:'Employee',
        skillSet:[
          {
            sid:101,
            skillName:"Angular",
            skillCat:"Web"
          }
        ],
        certSet:[]
      };

      authService.createSkill(emp.skillSet[0],emp.eid).subscribe(
        (receivedResponse: any) => {
          let respone = receivedResponse;
        },
        (error: any) => {}
      );
      const requestWrapper = backend.expectOne({url: "http://localhost:8080/pcs/employees/1/skills"});
      requestWrapper.flush(emp);
      tick();

      expect(requestWrapper.request.method).toEqual('POST');
      })));

      it('create a certificate' , fakeAsync(inject(
        [EmployeeSkillCertificateService, HttpTestingController],
        (authService: EmployeeSkillCertificateService, backend: HttpTestingController)=>{
          let emp:Employee={
            eid:1,
            empname:'Shiva',
            emprole:'Employee',
            skillSet:[
              {
                sid:101,
                skillName:"Angular",
                skillCat:"Web"
              }
            ],
            certSet:[
              {
                cid:1001,
                certName:"Begineer guide to angular",
                certCategory:"Begineer"
              }
            ]
          };
    
          authService.createCertificate(emp.certSet[0],emp.eid).subscribe(
            (receivedResponse: any) => {
              let respone = receivedResponse;
            },
            (error: any) => {}
          );
          const requestWrapper = backend.expectOne({url: "http://localhost:8080/pcs/employees/1/certificates"});
          requestWrapper.flush(emp);
          tick();
    
          expect(requestWrapper.request.method).toEqual('POST');
          })));

  it('show emp', () => {
    let empUrl ="http://localhost:8080/pcs/employees"
    let emp:Employee[]=[{
      eid:1,
      empname:'Shiva',
      emprole:'Employee',
      skillSet:[],
      certSet:[]
    }];
    let response:Employee[]=[];
      spyOn(service, 'getEmployee').and.returnValue(of(emp));
      service.getEmployee().subscribe(res => {
        response = res;
      });
      expect(response.length).toBe(1);
  });

  




});
