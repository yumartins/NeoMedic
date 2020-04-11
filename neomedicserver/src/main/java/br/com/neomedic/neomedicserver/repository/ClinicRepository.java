package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic, Long> {
}
