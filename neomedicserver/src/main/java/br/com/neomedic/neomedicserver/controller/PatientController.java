package br.com.neomedic.neomedicserver.controller;


import br.com.neomedic.neomedicserver.dto.PatientDTO;
import br.com.neomedic.neomedicserver.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @GetMapping
    public ResponseEntity getAll(){
        return ResponseEntity.ok(patientService.getAll().orElse(new ArrayList<>()));
    }

    @PostMapping
    public ResponseEntity create(@RequestBody PatientDTO patient) {
        return ResponseEntity.ok(patientService.create(patient));

    }

}
