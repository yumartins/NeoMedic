package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.Specialization;

import java.util.List;
import java.util.Optional;

public interface SpecializationService {

    Specialization saveSpecialization(Specialization specialization);

    Optional<List<Specialization>> findAllSpecializations();

    Optional<Specialization> findSpecializationById(Long id);
}
