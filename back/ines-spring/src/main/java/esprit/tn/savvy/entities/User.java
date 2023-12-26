package esprit.tn.savvy.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "User")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUser")
     Integer idUser;
     String firstName;
     String lastName;
     String email;
     String cin;
     String password;
     String address;
     Float moyenneBac ;
     Float moyennePreFac ;
     Float moyenneDeuFac ;
     Float notePfe ;
    @Temporal (TemporalType.DATE)
     Date dayOfBirth;
    String telNum;
    @Enumerated(EnumType.STRING)
    Role role;

    @JsonIgnore
    @ManyToMany(mappedBy = "enrolledUsers")
    private Set<Concours> Concours = new HashSet<>();





}
