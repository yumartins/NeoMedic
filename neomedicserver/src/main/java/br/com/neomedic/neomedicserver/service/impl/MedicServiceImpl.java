package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.exception.MedicException;
import br.com.neomedic.neomedicserver.model.Clinic;
import br.com.neomedic.neomedicserver.model.Medic;
import br.com.neomedic.neomedicserver.model.Specialization;
import br.com.neomedic.neomedicserver.repository.MedicRepository;
import br.com.neomedic.neomedicserver.service.ClinicService;
import br.com.neomedic.neomedicserver.service.MedicService;
import br.com.neomedic.neomedicserver.service.SpecializationService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MedicServiceImpl implements MedicService {

    private final MedicRepository medicRepository;
    private final ClinicService clinicService;
    private final SpecializationService specializationService;

    public MedicServiceImpl(MedicRepository medicRepository, ClinicService clinicService, SpecializationService specializationService) {
        this.medicRepository = medicRepository;
        this.clinicService = clinicService;
        this.specializationService = specializationService;
    }


    @Override
    public Page<Medic> findPageable(Pageable page) {
        return medicRepository.findAll(page);
    }

    @Override
    public Medic createMedic(Medic medic) {

        if(medic == null) {
            throw new MedicException("Medic must be not null");
        }

        if(CollectionUtils.isEmpty(medic.getClinics())) {
            throw new MedicException("The medic must have at least a clinic");
        }

        if(medic.getSpecialization() == null) {
            throw new MedicException("The medic specialization must be not null");
        }

        Optional<Specialization> specialization = specializationService.findSpecializationById(medic.getSpecialization().getId());

        if(specialization.isEmpty()) {
            throw new MedicException("The Specialization id is required or specialization not found");
        }

        medic.setSpecialization(specialization.get());

        List<Clinic> clinics = medic.getClinics().stream()
                .map(clinic -> clinicService.findClinicById(clinic.getId()))
                .map(clincOptional -> clincOptional.orElseThrow(() -> new MedicException("Clinic not found")))
                .collect(Collectors.toList());

        medic.setClinics(clinics);

        return medicRepository.save(medic);
    }

    private Clinic addMedicToClinic(Medic medic, Clinic clinic) {
        Optional<Clinic> clinicUpdated = clinicService.addMedicToClinic(clinic.getId(), medic);
        if(clinicUpdated.isEmpty()) {
            throw new MedicException("Clinic " + clinic.getId() + " not found");
        }
        return clinicUpdated.get();
    }

}
