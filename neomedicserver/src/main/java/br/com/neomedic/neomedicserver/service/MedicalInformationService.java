package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.dto.MedicalInformationDTO;
import br.com.neomedic.neomedicserver.model.MedicalInformation;

public interface MedicalInformationService {

    MedicalInformationDTO create(MedicalInformationDTO medicalInformationDTO);
    MedicalInformationDTO create(MedicalInformation medicalInformationDTO);

}
