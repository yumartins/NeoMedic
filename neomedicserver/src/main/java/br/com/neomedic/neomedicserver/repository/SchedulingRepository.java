package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Scheduling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchedulingRepository extends JpaRepository<Scheduling, Long> {
}
