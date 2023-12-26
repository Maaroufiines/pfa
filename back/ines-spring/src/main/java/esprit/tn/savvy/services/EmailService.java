package esprit.tn.savvy.services;

import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepUser;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailService implements IEmailService{
     JavaMailSender javaMailSender;
     RepUser repUser;
    @Value("${spring.mail.username}")
    private String sender;
    @Override
    public void sendEmail(String to, String subject, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("noreply@savvy.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(content);
        javaMailSender.send(message);
    }

    @Override
    public String sendEmailPass(String to, String subject, User user) {

        try {

            Random random = new Random();
            int randomWithNextInt = Math.abs(random.nextInt());
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

            user.setPassword(passwordEncoder.encode(String.valueOf(randomWithNextInt)));


            // Try block to check for exceptions
            try {

                // Creating a simple mail message
                SimpleMailMessage mailMessage
                        = new SimpleMailMessage();

                // Setting up necessary details
                mailMessage.setFrom(sender);
                mailMessage.setTo(user.getEmail());
                mailMessage.setText("Your new password is :" + randomWithNextInt );
                mailMessage.setSubject("Reset Password");

                // Sending the mail
                javaMailSender.send(mailMessage);
                repUser.save(user);
                return "Mail Sent";
            }

            // Catch block to handle the exceptions
            catch (Exception e) {
                return "Error";
            }
        }catch(Exception e)
        {
            return "Error";
        }
    }
}
