package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.model.Specialization;
import br.com.neomedic.neomedicserver.repository.SpecializationRepository;
import br.com.neomedic.neomedicserver.service.SpecializationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecializationServiceImpl implements SpecializationService {

    @Autowired
    private SpecializationRepository specializationRepository;

    @Override
    public Specialization saveSpecialization(Specialization specialization) {
        return specializationRepository.save(specialization);
    }

    @Override
    public Optional<List<Specialization>> findAllSpecializations() {
        return Optional.ofNullable(specializationRepository.findAll());
    }

    @Override
    public Optional<Specialization> findSpecializationById(Long id) {

        if(id != null) {
            return specializationRepository.findById(id);
        }

        return Optional.empty();

    }


}
