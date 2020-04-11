package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.Medic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface MedicService {
    Page<Medic> findPageable(Pageable page);

    Medic createMedic(Medic medic);
}
