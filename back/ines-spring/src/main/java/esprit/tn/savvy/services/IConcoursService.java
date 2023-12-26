package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.Concours;

import java.util.List;

public interface IConcoursService  {

    List<Concours> find();

    Concours createConcours(Concours concours);
}
