package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.model.Clinic;
import br.com.neomedic.neomedicserver.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/clinic")
public class ClinicController {

    @Autowired
    private ClinicService clinicService;


    @GetMapping
    public ResponseEntity findAll() {
        Optional clinics = clinicService.findAllClinics();
        if(clinics.isPresent()) {
            return ResponseEntity.ok(clinics.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity createClinic(@RequestBody Clinic clinic) {
        Optional clinicSaved = clinicService.saveClinic(clinic);

        if(clinicSaved.isPresent()) {
            return ResponseEntity.ok(clinicSaved.get());
        }
        return ResponseEntity.notFound().build();
    }


}
