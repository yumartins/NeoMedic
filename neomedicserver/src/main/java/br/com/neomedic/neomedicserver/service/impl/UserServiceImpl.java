package br.com.neomedic.neomedicserver.service.impl;

import br.com.neomedic.neomedicserver.model.User;
import br.com.neomedic.neomedicserver.repository.UserRepository;
import br.com.neomedic.neomedicserver.service.RoleService;
import br.com.neomedic.neomedicserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public long count() {
        return userRepository.count();
    }

    @Override
    public User createUser(User user) {
        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );
        user = userRepository.save(user);

        if(user.getRoles() != null){
            User finalUser = user;
            user.getRoles().stream()
                    .peek(role -> role.setUser(finalUser))
                    .forEach(role -> roleService.createRole(role));

            user.getRoles().stream()
                    .peek(role -> role.setUser(null));
        }

        user.setPassword(null);
        return user;

    }

    @Override
    public Optional<List> getAllUsers() {
        return Optional.ofNullable(userRepository.findAll());
    }

}
