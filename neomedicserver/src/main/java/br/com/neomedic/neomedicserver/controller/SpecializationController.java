package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.model.Specialization;
import br.com.neomedic.neomedicserver.service.SpecializationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/specialization")
public class SpecializationController {

    private final SpecializationService specializationService;

    public SpecializationController(SpecializationService specializationService) {
        this.specializationService = specializationService;
    }

    @GetMapping
    public ResponseEntity findAll() {
        Optional specializations = specializationService.findAllSpecializations();
        if(specializations.isPresent()) {
            return ResponseEntity.ok(specializations.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity create(@RequestBody Specialization specialization) {
        return ResponseEntity.ok(specializationService.saveSpecialization(specialization));
    }

}
