package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.MedicalInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalInformationRepository extends JpaRepository<MedicalInformation, Long> {
}
