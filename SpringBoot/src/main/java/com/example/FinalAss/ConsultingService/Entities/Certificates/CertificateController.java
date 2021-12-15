package com.example.FinalAss.ConsultingService.Entities.Certificates;

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
public class CertificateController {

	@Autowired
	private CertificateRepo crepo;

	@Autowired
	private EmployeeRepo erepo;

	@GetMapping(value = "/employees/{eid}/certificates")
	public List<Certificate> getCertificates(@PathVariable int eid) {
		Optional<Employee> e = erepo.findById(eid);
		return e.get().getCertSet();
	}

	@PostMapping(value = "/employees/{eid}/certificates")
	public Certificate saveCertificate(@RequestBody Certificate cer, @PathVariable int eid) {
		Optional<Employee> e = erepo.findById(eid);
		e.get().getCertSet().add(cer);
		crepo.save(cer);
		return cer;
	}

	@GetMapping(value = "/employees/{eid}/certificates/{cid}")
	public ResponseEntity<Certificate> getSkillById(@PathVariable int eid, @PathVariable int cid) {
		Optional<Employee> employee = erepo.findById(eid);
		Certificate c = crepo.getById(cid);
		return ResponseEntity.ok(c);
	}

	@DeleteMapping("/employees/{eid}/certificates/{cid}")
	public ResponseEntity<Map<String, Boolean>> deleteCertificate(@PathVariable int cid, @PathVariable int eid) {
//		Optional<Employee> er = erepo.findById(eid);
//		Certificate cer = er.get().getCertSet().get(cid);
		Certificate cer = crepo.getById(cid);
		crepo.delete(cer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
