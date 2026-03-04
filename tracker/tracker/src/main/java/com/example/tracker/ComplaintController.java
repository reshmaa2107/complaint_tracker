package com.example.tracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin(origins="http://localhost:3000")
public class ComplaintController {

    @Autowired
    private ComplaintService service;

    @PostMapping
    public Complaint add(@RequestBody Complaint complaint){
        return service.addComplaint(complaint);
    }

    @GetMapping
    public List<Complaint> getAll(){
        return service.getAll();
    }

    @GetMapping("/student/{email}")
    public List<Complaint> getByStudent(@PathVariable String email){
        return service.getByStudent(email);
    }

    @PutMapping("/{id}")
    public Complaint update(@PathVariable Long id,
                            @RequestParam String status){
        return service.updateStatus(id,status);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}