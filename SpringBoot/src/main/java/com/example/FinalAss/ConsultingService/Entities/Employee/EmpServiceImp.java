package com.example.FinalAss.ConsultingService.Entities.Employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImp implements EmpService {

	@Autowired
	EmployeeRepo erepo;

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return erepo.findAll();
	}

	@Override
	public Employee setEmployee(Employee e) {
		// TODO Auto-generated method stub
		erepo.save(e);
		return e;

	}

	@Override
	public Optional<Employee> searchById(int id) {
		// TODO Auto-generated method stub
		return erepo.findById(id);
	}

	@Override
	public void updateEmployee(int id, Employee e) {
		// TODO Auto-generated method stub
		try {
			Employee e1 = erepo.findById(id).orElseThrow(() -> new Exception("no user found"));
			e1.setEmpname(e.getEmpname());
			erepo.save(e1);
		} catch (Exception e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
	}

	@Override
	public void deleteEmployee(int id) {
		// TODO Auto-generated method stub
		erepo.deleteById(id);
	}

}
