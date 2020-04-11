package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.City;

import java.util.List;
import java.util.Optional;

public interface CityService {
    Optional<City> createCity(City city);

    Optional<City> findCityById(Long id);

    Optional<List<City>> findAllCity();
}
