package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.Medic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MedicService {

    Medic createMedic(Medic medic);

    Page<Medic> findMedicByPage(String cityName, String specializationName, Pageable page);
}
