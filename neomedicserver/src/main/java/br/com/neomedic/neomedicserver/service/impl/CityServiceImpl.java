package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.model.City;
import br.com.neomedic.neomedicserver.repository.CityRepository;
import br.com.neomedic.neomedicserver.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;


    @Override
    public Optional<City> createCity(City city) {
        return Optional.ofNullable(cityRepository.save(city));
    }

    @Override
    public Optional<City> findCityById(Long id) {
        return cityRepository.findById(id);
    }

    @Override
    public Optional<List<City>> findAllCity() {
        return Optional.ofNullable(cityRepository.findAll());
    }

}
