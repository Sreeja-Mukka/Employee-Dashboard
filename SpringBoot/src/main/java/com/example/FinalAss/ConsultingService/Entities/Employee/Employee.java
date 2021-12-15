package com.example.FinalAss.ConsultingService.Entities.Employee;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.example.FinalAss.ConsultingService.Entities.Certificates.Certificate;
import com.example.FinalAss.ConsultingService.Entities.Skills.Skill;

@Entity

public class Employee {

	@Id
	@GeneratedValue
	private int eid;
	private String Empname;
	private String Emprole;

//	@ManyToMany(targetEntity = Skill.class, cascade = CascadeType.ALL)
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "employee_skill", joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "eid"), inverseJoinColumns = @JoinColumn(name = "skill_id", referencedColumnName = "sid"))
	private List<Skill> skillSet;

//	@ManyToMany(targetEntity = Certificate.class, cascade = CascadeType.ALL)
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "employee_certificate", joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "eid"), inverseJoinColumns = @JoinColumn(name = "certificate_id", referencedColumnName = "cid"))
	private List<Certificate> certSet;

	public Employee() {
		super();
	}

	public Employee(int eid, String Empname, String Emprole) {
		super();
		this.eid = eid;
		this.Empname = Empname;
		this.Emprole = Emprole;
	}

	public Employee(int eid, String Empname, String Emprole, List<Skill> skillSet) {
		super();
		this.eid = eid;
		this.Empname = Empname;
		this.Emprole = Emprole;
		this.skillSet = skillSet;
	}

	public Employee(int eid, String Empname, List<Certificate> certSet, String Emprole) {
		super();
		this.eid = eid;
		this.Empname = Empname;
		this.Emprole = Emprole;
		this.certSet = certSet;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEmpname() {
		return Empname;
	}

	public void setEmpname(String empname) {
		Empname = empname;
	}

	public String getEmprole() {
		return Emprole;
	}

	public void setEmprole(String emprole) {
		Emprole = emprole;
	}

	public List<Skill> getSkillSet() {
		return skillSet;
	}

	public void setSkillSet(List<Skill> skillSet) {
		this.skillSet = skillSet;
	}

	public List<Certificate> getCertSet() {
		return certSet;
	}

	public void setCertSet(List<Certificate> certSet) {
		this.certSet = certSet;
	}
}
