package esprit.tn.savvy.controller;

import esprit.tn.savvy.entities.Concours;
import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepConcours;
import esprit.tn.savvy.repositories.RepUser;
import esprit.tn.savvy.services.IConcoursService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/concours")
@AllArgsConstructor
@CrossOrigin(origins = "*")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ConcoursController {
    IConcoursService concoursService ;
    @Autowired
    RepConcours repConcours ;

    @Autowired
    RepUser repUser ;
    @GetMapping
    List<Concours> getConcours() {
        return concoursService.find();
    }


    @PutMapping("/{concourId}/user/{userId}")
    Concours addUserToConcours(
            @PathVariable Integer concourId,
            @PathVariable Integer userId
    ) {
        Concours concours = repConcours.findById(concourId).get();
        User student = repUser.findById(userId).get();
        concours.getEnrolledUsers().add(student);
        return repConcours.save(concours);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Concours> getItemById(@PathVariable Integer id) {
        Optional<Concours> item = repConcours.findById(id);
        if (item.isPresent()) {
            return ResponseEntity.ok(item.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>  deleteConcours(@PathVariable Integer id){
        repConcours.deleteById(id);
        return ResponseEntity.noContent().build();
    }



    @PostMapping
    Concours createConcours(@RequestBody Concours con) {
        return concoursService.createConcours(con);
    }
}
