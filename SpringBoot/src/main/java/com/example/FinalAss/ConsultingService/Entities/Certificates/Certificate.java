package com.example.FinalAss.ConsultingService.Entities.Certificates;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.example.FinalAss.ConsultingService.Entities.Employee.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class Certificate {

	@Id
	@GeneratedValue
	private int cid;
	private String certName;
	private String certCategory;

//	@ManyToMany(targetEntity = Employee.class, mappedBy = "certSet", cascade = CascadeType.ALL)
	@JsonIgnore
	@ManyToMany(mappedBy = "certSet")
	private List<Employee> EmplSet;

	public Certificate() {
		super();
	}

	public Certificate(int cid, String certName, String certCategory) {
		super();
		this.cid = cid;
		this.certName = certName;
		this.certCategory = certCategory;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCertName() {
		return certName;
	}

	public void setCertName(String certName) {
		this.certName = certName;
	}

	public String getCertCategory() {
		return certCategory;
	}

	public void setCertCategory(String certCategory) {
		this.certCategory = certCategory;
	}

}
