package esprit.tn.savvy.repositories;

import esprit.tn.savvy.entities.Role;
import esprit.tn.savvy.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepUser extends JpaRepository<User,Integer> {

    User findUserByEmail(String email);

    User findUserByCin(String cin);

    List<User> findByRole(Role role);
}
