package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Set<Role>> findByUser_Username(String username);

}
