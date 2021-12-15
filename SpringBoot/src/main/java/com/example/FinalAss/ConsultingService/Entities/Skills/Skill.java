package com.example.FinalAss.ConsultingService.Entities.Skills;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.example.FinalAss.ConsultingService.Entities.Employee.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Skill {

	@Id
	@GeneratedValue
	private int sid;
	private String skillName;
	private String skillCat;

//	@ManyToMany(targetEntity = Employee.class, mappedBy = "skillSet", cascade = CascadeType.ALL)
	@JsonIgnore
	@ManyToMany(mappedBy = "skillSet")
	private List<Employee> EmpSet;

	public Skill() {
		super();
	}

	public Skill(int sid, String skillName, String skillCat) {
		super();
		this.sid = sid;
		this.skillName = skillName;
		this.skillCat = skillCat;
	}

	public int getId() {
		return sid;
	}

	public void setId(int sid) {
		this.sid = sid;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	public String getSkillCat() {
		return skillCat;
	}

	public void setSkillCat(String skillCat) {
		this.skillCat = skillCat;
	}

}
