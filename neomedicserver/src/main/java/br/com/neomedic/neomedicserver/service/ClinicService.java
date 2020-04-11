package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.Clinic;
import br.com.neomedic.neomedicserver.model.Medic;

import java.util.List;
import java.util.Optional;

public interface ClinicService {
    Optional<Clinic> saveClinic(Clinic clinic);

    Optional<List<Clinic>> findAllClinics();

    Optional<Clinic> findClinicById(Long id);

    Optional<Clinic> addMedicToClinic(Long id, Medic medic);
}
