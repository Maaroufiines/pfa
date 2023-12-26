package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepUser;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserService implements IUserService {
    RepUser ru;

    @Override
    public User findUserByCin(String cin) {
        return ru.findUserByCin(cin);

    }

    @Override
    public User findUserByEmail(String email) {
        return ru.findUserByEmail(email);

    }

    @Override
    public User findUserById(Integer idUser) {
        return ru.findById(idUser).orElse(null);
    }

    @Override
    public User singUp(User user) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return ru.save(user);
    }


    public static Boolean hasPermission(String... desiredAuthorities) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            return false;
        }
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        return authorities.stream()
                .map(GrantedAuthority::getAuthority)
                .anyMatch(authority -> Stream.of(desiredAuthorities)
                        .anyMatch(desired -> authority.equalsIgnoreCase(desired)));

    }



}

