package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.User;

public interface IEmailService {

    void sendEmail(String to, String subject, String content);
    String sendEmailPass(String to, String subject, User user);
}
