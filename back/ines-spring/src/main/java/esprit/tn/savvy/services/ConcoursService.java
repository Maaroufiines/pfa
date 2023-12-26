package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.Concours;
import esprit.tn.savvy.repositories.RepConcours;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConcoursService implements IConcoursService {

    RepConcours ru;

    @Override
    public List<Concours> find()  {
        return ru.findAll();

    }


    @Override
    public Concours createConcours(@RequestBody Concours concours) {
        return ru.save(concours);
    }


}
