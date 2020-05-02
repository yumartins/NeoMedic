package br.com.neomedic.neomedicserver.configuration;

import br.com.neomedic.neomedicserver.model.Role;
import br.com.neomedic.neomedicserver.model.User;
import br.com.neomedic.neomedicserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.ContextRefreshedEvent;

import java.util.HashSet;

@Configuration
public class StartupLoadConfig implements ApplicationListener<ContextRefreshedEvent> {


    @Autowired
    private UserService userService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if(userService.count() <= 0) {
            User user = new User();
            user.setUsername("neomedic_admin");
            user.setPassword("neomedic-secret123");
            user.setEnabled(true);
            user.setRoles(new HashSet<>() {{
                add(new Role("ADMIN"));
            }});
            userService.createUser(user);
        }
    }

}
