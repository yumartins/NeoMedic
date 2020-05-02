package br.com.neomedic.neomedicserver.service;


import br.com.neomedic.neomedicserver.model.Role;

import java.util.Optional;
import java.util.Set;

public interface RoleService {
    Optional<Set<Role>> getAllUserRoles(String username);

    Role createRole(Role role);
}
