package com.example.FinalAss.ConsultingService.Entities.Skills;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalAss.ConsultingService.Entities.Employee.Employee;
import com.example.FinalAss.ConsultingService.Entities.Employee.EmployeeRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pcs/")
public class SkillController {

	@Autowired
	private SkillRepo srepo;
	@Autowired
	private EmployeeRepo erepo;

	@GetMapping(value = "/employees/{eid}/skills")
	public List<Skill> getSkills(@PathVariable int eid) {
		Optional<Employee> e = erepo.findById(eid);
		return e.get().getSkillSet();
	}

	@PostMapping(value = "/employees/{eid}/skills")
	public Skill saveSkill(@RequestBody Skill skill, @PathVariable int eid) {
		Optional<Employee> e = erepo.findById(eid);
		e.get().getSkillSet().add(skill);
		srepo.save(skill);
		return skill;

	}

	@GetMapping(value = "/employees/{eid}/skills/{sid}")
	public ResponseEntity<Optional<Skill>> getSkillById(@PathVariable int sid, @PathVariable int eid) {
		Optional<Employee> employee = erepo.findById(eid);
//		Skill s = employee.get().getSkillSet().get(sid);
//		System.out.println(s);
		Optional<Skill> s = srepo.findById(sid);
		return ResponseEntity.ok(s);
	}

	@DeleteMapping("/employees/{eid}/skills/{sid}")
	public ResponseEntity<Map<String, Boolean>> deleteSkills(@PathVariable int eid, @PathVariable int sid) {
		Optional<Employee> e = erepo.findById(eid);
//		Optional<Skill> sk = srepo.findById(sid);
//		List<Skill> lk = this.getSkills(eid);
//		String name = sk.get().getSkillName();
//		for (Skill si : lk) {
//			if (si.getSkillName().equals(name)) {
//				srepo.delete(si);
//			}
//		}
		Skill skill = srepo.getById(sid);
		srepo.delete(skill);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
