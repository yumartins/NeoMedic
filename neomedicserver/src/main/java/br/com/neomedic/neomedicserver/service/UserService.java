package br.com.neomedic.neomedicserver.service;

import br.com.neomedic.neomedicserver.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    long count();

    User createUser(User user);

    Optional<List> getAllUsers();
}
