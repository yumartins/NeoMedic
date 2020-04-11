package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.exception.ClinicException;
import br.com.neomedic.neomedicserver.model.City;
import br.com.neomedic.neomedicserver.model.Clinic;
import br.com.neomedic.neomedicserver.model.Medic;
import br.com.neomedic.neomedicserver.repository.ClinicRepository;
import br.com.neomedic.neomedicserver.service.CityService;
import br.com.neomedic.neomedicserver.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClinicServiceImpl implements ClinicService {

    @Autowired
    private ClinicRepository clinicRepository;

    @Autowired
    private CityService cityService;


    @Override
    @Transactional
    public Optional<Clinic> saveClinic(Clinic clinic) {
        if(clinic == null) {
            throw new ClinicException("The Clinic must be not null");
        }
        if(clinic.getCity() == null || clinic.getCity().getId() == null) {
            throw new ClinicException("The clinic must have a valid city");
        }

        Optional<City> city = cityService.findCityById(clinic.getCity().getId());
        if(city.isEmpty()) {
            throw new ClinicException("The city must be exist");
        }

        clinic.setCity(city.get());

        return Optional.ofNullable(clinicRepository.save(clinic));
    }

    @Override
    public Optional<List<Clinic>> findAllClinics() {
        return Optional.ofNullable(clinicRepository.findAll());
    }

    @Override
    public Optional<Clinic> findClinicById(Long id) {
        return clinicRepository.findById(id);
    }

    @Override
    public Optional<Clinic> addMedicToClinic(Long id, Medic medic) {
        Optional<Clinic> clinic = clinicRepository.findById(id);

        if(clinic.isPresent()) {
            List<Medic> medics = clinic.get().getMedics();
            medics.add(medic);
            return clinic;
//            return Optional.ofNullable(clinicRepository.save(clinic.get()));
        }

        return Optional.empty();
    }

}
