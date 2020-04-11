package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.dto.MedicalInformationDTO;
import br.com.neomedic.neomedicserver.model.MedicalInformation;
import br.com.neomedic.neomedicserver.repository.MedicalInformationRepository;
import br.com.neomedic.neomedicserver.service.MedicalInformationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalInformationServiceImpl implements MedicalInformationService {

    @Autowired
    private MedicalInformationRepository repository;

    @Override
    public MedicalInformationDTO create(MedicalInformationDTO medicalInformationDTO) {
        ModelMapper modelMapper = new ModelMapper();

        MedicalInformation medicalInformation = modelMapper.map(medicalInformationDTO, MedicalInformation.class);

        medicalInformation = repository.save(medicalInformation);

        return modelMapper.map(medicalInformation, MedicalInformationDTO.class);
    }

    @Override
    public MedicalInformationDTO create(MedicalInformation medicalInformation) {
        ModelMapper modelMapper = new ModelMapper();

        medicalInformation = repository.save(medicalInformation);

        return modelMapper.map(medicalInformation, MedicalInformationDTO.class);

    }
}
