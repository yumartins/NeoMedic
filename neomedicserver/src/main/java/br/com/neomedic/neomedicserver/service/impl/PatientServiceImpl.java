package br.com.neomedic.neomedicserver.service.impl;


import br.com.neomedic.neomedicserver.dto.PatientDTO;
import br.com.neomedic.neomedicserver.model.Patient;
import br.com.neomedic.neomedicserver.repository.PatientRepository;
import br.com.neomedic.neomedicserver.service.MedicalInformationService;
import br.com.neomedic.neomedicserver.service.PatientService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository repository;

    @Autowired
    private MedicalInformationService medicalInformationService;


    @Override
    public Optional<List<PatientDTO>> getAll() {
        ModelMapper mapper = new ModelMapper();

        List<Patient> patients = repository.findAll();

        if(!CollectionUtils.isEmpty(patients)) {
            return Optional.of(patients.stream()
                    .map((patient -> mapper.map( patient, PatientDTO.class )))
                    .collect(Collectors.toList()));
        }

        return Optional.empty();
    }

    @Override
    public PatientDTO create(PatientDTO patientDTO) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);

        Patient patient = modelMapper.map(patientDTO, Patient.class);

        if(patient != null && !CollectionUtils.isEmpty(patient.getMedicalInformation())) {
            patient.getMedicalInformation().forEach((medicalInformation -> medicalInformationService.create(medicalInformation)));
        }

        patient = repository.save(patient);

        return modelMapper.map(patient, PatientDTO.class);

    }
}
