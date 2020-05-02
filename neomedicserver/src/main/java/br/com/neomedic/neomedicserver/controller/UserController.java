package br.com.neomedic.neomedicserver.controller;

import br.com.neomedic.neomedicserver.model.User;
import br.com.neomedic.neomedicserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/api/admin/user")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping
    public ResponseEntity create(@RequestBody User user) {
        return ResponseEntity.of(Optional.ofNullable(userService.createUser(user)));
    }

    @GetMapping
    public ResponseEntity list() {
        Optional users = userService.getAllUsers();

        if(users.isPresent()) {
            return ResponseEntity.ok(users.get());
        }

        return ResponseEntity.ok().build();
    }



}
