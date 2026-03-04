package com.example.tracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository repo;

    public Complaint addComplaint(Complaint complaint){
        complaint.setStatus("Pending");
        complaint.setCreatedAt(LocalDateTime.now());
        return repo.save(complaint);
    }

    public List<Complaint> getAll(){
        return repo.findAll();
    }

    public List<Complaint> getByStudent(String email){
        return repo.findByStudentEmail(email);
    }

    public Complaint updateStatus(Long id,String status){
        Complaint c = repo.findById(id).orElseThrow();
        c.setStatus(status);
        return repo.save(c);
    }

    public void delete(Long id){
        repo.deleteById(id);
    }
}