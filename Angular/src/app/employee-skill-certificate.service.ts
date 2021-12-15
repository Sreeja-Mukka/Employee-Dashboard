import { Certificate } from './Certificate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { Skill } from './Skill';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillCertificateService {

  private base:string = "http://localhost:8080/pcs/employees";
  constructor(private httpclient :HttpClient) { }

  getEmployee():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.base}`);
  }
  createEmployee(employee :Employee):Observable<any>{
    return this.httpclient.post(`${this.base}`, employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.base}/${id}`);
  }
  deleteEmp(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.base}/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpclient.put(`${this.base}/${id}`, employee);
  }
  getAllSkills(id:number):Observable<Skill[]>{
    return this.httpclient.get<Skill[]>(`${this.base}/${id}/skills`);
  }
  createSkill(skill :Skill,eid:number):Observable<any>{
    return this.httpclient.post(`${this.base}/${eid}/skills`, skill);
  }
  deleteSkill(eid:number,id: number): Observable<Object>{
    return this.httpclient.delete(`${this.base}/${eid}/skills/${id}`);
  }
  getAllCerts(id:number):Observable<Certificate[]>{
    return this.httpclient.get<Certificate[]>(`${this.base}/${id}/certificates`);
  }
  createCertificate(cer :Certificate,eid:number):Observable<any>{
    return this.httpclient.post(`${this.base}/${eid}/certificates`, cer);
  }
  deleteCert(eid:number,id: number): Observable<Object>{
    return this.httpclient.delete(`${this.base}/${eid}/certificates/${id}`);
  }
}
