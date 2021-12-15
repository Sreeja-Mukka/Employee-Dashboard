package com.example.FinalAss.ConsultingService;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.FinalAss.ConsultingService.Entities.Employee.EmpServiceImp;
import com.example.FinalAss.ConsultingService.Entities.Employee.Employee;
import com.example.FinalAss.ConsultingService.Entities.Employee.EmployeeController;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class EmpControllerTest {

	@Mock
	EmpServiceImp service;

	@InjectMocks
	EmployeeController controller;

	@Test
	void EmployeeNullTest() {
		{

			Employee or = null;

			assertThat(or).isNull();
		}
	}

	@Test
	void saveEmployee() {
		Employee or = new Employee(1, "Shiva", "Employee");
		Employee saveEmp = controller.saveEmployee(or);
		assertThat(or.getEmpname()).isEqualTo("Shiva");
	}

}
