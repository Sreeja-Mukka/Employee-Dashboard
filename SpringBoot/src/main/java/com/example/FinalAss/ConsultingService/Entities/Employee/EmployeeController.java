package com.example.FinalAss.ConsultingService.Entities.Employee;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalAss.ConsultingService.Exception.ResourseNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pcs/")
public class EmployeeController {

	@Autowired
	private EmployeeRepo erepo;

	@Autowired
	private EmpService eserv;

	@GetMapping(value = "/employees")
	public List<Employee> getEmployees() {
		return eserv.getAllEmployee();
	}

	@PostMapping(value = "/employees")
	public Employee saveEmployee(@RequestBody Employee emp) {
		return eserv.setEmployee(emp);
	}

	@GetMapping(value = "/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee = erepo.findById(id)
				.orElseThrow(() -> new ResourseNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails) {
		Employee employee = erepo.findById(id)
				.orElseThrow(() -> new ResourseNotFoundException("Employee not exist with id :" + id));

		employee.setEmpname(employeeDetails.getEmpname());
//		
		Employee updatedEmployee = erepo.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id) {
		Employee employee = erepo.findById(id)
				.orElseThrow(() -> new ResourseNotFoundException("Employee not exist with id :" + id));

		erepo.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
