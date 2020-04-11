package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
}
