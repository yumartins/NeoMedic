package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.model.Medic;
import br.com.neomedic.neomedicserver.service.MedicService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/medic")
public class MedicController {

    private static Logger logger = LogManager.getLogger(MedicController.class);

    @Autowired
    private MedicService medicService;

    @GetMapping
    public ResponseEntity page(@PageableDefault(page = 0, size = 20)Pageable pageable,
                               @RequestParam(required = false) String city,
                               @RequestParam(required = false) String specialization){
        logger.info("Doing a find page! city=" + city + ", specialization=" + specialization);
        return ResponseEntity.ok(medicService.findMedicByPage(city, specialization, pageable));
    }

    @PostMapping
    public ResponseEntity createMedic(@RequestBody Medic medic) {
        return ResponseEntity.ok(medicService.createMedic(medic));
    }


}
