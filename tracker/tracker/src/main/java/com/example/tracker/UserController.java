package com.example.tracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="*")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public String test() {
        return "Users API Working";
    }
    @PostMapping("/register")
    public User register(@RequestBody User user){
        return service.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){

        User loggedUser = service.login(user.getEmail(), user.getPassword());

        if(loggedUser != null){
            return ResponseEntity.ok(loggedUser);
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}