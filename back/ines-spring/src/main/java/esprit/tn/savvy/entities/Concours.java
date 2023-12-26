package esprit.tn.savvy.entities;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Concours")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Concours implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;
    String name;
    String certif;
    String dateExam;
    String dateConcours;
    String result;
    String scoor;
    String description;
    @ManyToMany
    @JoinTable(
            name = "user_enrolled",
            joinColumns = @JoinColumn(name = "concour_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    Set<User> enrolledUsers = new HashSet<>();






}