package esprit.tn.savvy.controller;

import esprit.tn.savvy.dto.AuthRequest;
import esprit.tn.savvy.entities.User;
import esprit.tn.savvy.repositories.RepConcours;
import esprit.tn.savvy.services.IEmailService;
import esprit.tn.savvy.services.IUserService;
import esprit.tn.savvy.util.JwtTokenProvider;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {


    private AuthenticationManager authenticationManager;


    private JwtTokenProvider jwtTokenProvider;

    private IUserService userService;

    private IEmailService emailService;

    @Autowired
    RepConcours repConcours;

    @PostMapping("/login")
    public Map<String,Object> authenticateUser(@RequestBody AuthRequest authRequest) {
        User user = userService.findUserByCin(authRequest.getCin());
        System.out.println(user.getEmail());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(),
                        authRequest.getPassword()
                )
        );
        System.out.println(authentication);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtTokenProvider.generateToken(authentication);
        Map<String,Object> tokenData = new HashMap<>();
        tokenData.put("token",jwt);
        return tokenData;
    }

    @PostMapping("signUp")
    public User signUp(@RequestBody User user)
    {
      return userService.singUp(user);
    }



    @GetMapping("getAuth")
    public Boolean getAuth(@RequestHeader("Authorization") String authorizationHeader)
    {

        authorizationHeader = authorizationHeader.replace("Bearer ","");
        System.out.println(jwtTokenProvider.validateToken(authorizationHeader));
        return jwtTokenProvider.validateToken(authorizationHeader);
    }

    @GetMapping("{email}")
    public User getUserByEmail(@PathVariable("email") String email)
    {
        User user = userService.findUserByEmail(email) ;
        if(user != null)
        {
            emailService.sendEmailPass(email,"Password reset",user);
            return user;
        }
        else
            return null;
    }

    @GetMapping("getSessions")
    public User getBySession(@RequestHeader("Authorization") String authorizationHeader)
    {

     authorizationHeader = authorizationHeader.replace("Bearer ","")   ;

    return userService.findUserByEmail(jwtTokenProvider.getUsernameFromToken(authorizationHeader));
    }


    @GetMapping("verifyPassword")
    public Boolean verify(@RequestParam("password") String password,@RequestParam("encrypted") String encrypted)
    {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
       return passwordEncoder.matches(password,encrypted);
    }


}
