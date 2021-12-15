package com.example.FinalAss.ConsultingService;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.FinalAss.ConsultingService.Entities.Employee.Employee;
import com.example.FinalAss.ConsultingService.Entities.Employee.EmployeeController;
import com.example.FinalAss.ConsultingService.Entities.Skills.Skill;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class SkillControllerTest {

	@InjectMocks
	EmployeeController controller;

	@Test
	void saveSkill() {
		List<Skill> sk = new ArrayList<Skill>();
		sk.add(new Skill(101, "Angular", "Web"));
		Employee or = new Employee(1, "Shiva", "Employee", sk);

		assertThat(or.getSkillSet()).isNotEmpty();
	}

}
