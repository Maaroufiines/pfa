package esprit.tn.savvy.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfig {

    @Bean
    public String myString() {
        return "Hello, world!";
    }

}
