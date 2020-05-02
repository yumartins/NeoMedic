package br.com.neomedic.neomedicserver.repository;

import br.com.neomedic.neomedicserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
