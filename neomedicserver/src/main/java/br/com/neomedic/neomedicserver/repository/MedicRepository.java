package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Medic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicRepository extends PagingAndSortingRepository<Medic, Long> {

    Page<Medic> findByClinics_CityNameAndSpecializationName(String cityName, String specializationName, Pageable page);

    Page<Medic> findBySpecializationName(String specializationName, Pageable page);

    Page<Medic> findByClinics_CityName(String cityName, Pageable page);

}
