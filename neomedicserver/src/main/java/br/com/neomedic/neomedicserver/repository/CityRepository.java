package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
