package esprit.tn.savvy.util;

import esprit.tn.savvy.entities.Role;
import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepUser;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.List;

@Component
@AllArgsConstructor
public class AdminUserInitializer {


    private RepUser userRepository;

    @Transactional
    @PostConstruct
    public void init() {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


        List<User> user = userRepository.findByRole(Role.ADMIN);

        if (user.size() == 0) {
            // create a new admin user
            User adminUser = new User();
            adminUser.setFirstName("Admin");
            adminUser.setLastName("User");
            adminUser.setEmail("admin@example.com");
            adminUser.setPassword(passwordEncoder.encode("123456789"));
            adminUser.setRole(Role.ADMIN);

            userRepository.save(adminUser);
        }
    }
}

