package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.dto.PatientDTO;

import java.util.List;
import java.util.Optional;

public interface PatientService {

    Optional<List<PatientDTO>> getAll();
    PatientDTO create(PatientDTO patientDTO);

}
