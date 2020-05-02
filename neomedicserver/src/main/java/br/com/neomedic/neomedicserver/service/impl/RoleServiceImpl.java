package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.model.Role;
import br.com.neomedic.neomedicserver.repository.RoleRepository;
import br.com.neomedic.neomedicserver.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;


    @Override
    public Optional<Set<Role>> getAllUserRoles(String username) {

        return roleRepository.findByUser_Username(username);

    }

    @Override
    public Role createRole(Role role) {

        if(role.getName() != null && !role.getName().startsWith("ROLE_")) {
            role.setName("ROLE_" + role.getName());
        }

        return roleRepository.save(role);
    }


}
