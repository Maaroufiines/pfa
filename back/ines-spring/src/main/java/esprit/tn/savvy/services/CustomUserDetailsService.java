package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.CustomUserDetails;
import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private RepUser userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(username);
        return new CustomUserDetails(user.getEmail(), user.getPassword(), user.getRole());
    }
}
