package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecializationRepository extends JpaRepository<Specialization, Long> {
}
