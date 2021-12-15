package com.example.FinalAss.ConsultingService.Entities.Employee;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface EmpService {
	public List<Employee> getAllEmployee();

	public Employee setEmployee(Employee e);

	public Optional<Employee> searchById(int id);

	public void updateEmployee(int id, Employee e);

	public void deleteEmployee(int id);
}
