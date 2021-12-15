import { Certificate } from './Certificate';
import { Skill } from "./Skill"

export class Employee{
    eid!:number
    empname!:string
    emprole!:string
    skillSet!:Array<Skill>
    certSet!:Array<Certificate>
}