package com.medicinetracking.api.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicinetracking.api.entities.Doctor;
import com.medicinetracking.api.services.Abstract.DoctorService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/doctors")
@CrossOrigin
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping
    public ResponseEntity<?> getAllDoctors() {
        List<Doctor> list = doctorService.getAllDoctor();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOneDoctor(@PathVariable(name = "id", required = true) int id) {
        Doctor doctor = doctorService.getOneDoctor(id);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> postOneDoctor(@RequestBody Doctor doctor) {
        Doctor doctorAdded = doctorService.postOneDoctor(doctor);
        return new ResponseEntity<>(doctorAdded, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> putOneDoctor(@PathVariable(name = "id", required = true) int id,
            @RequestBody Doctor doctor) {
        Doctor doctorUpdated = doctorService.putOneDoctor(id, doctor);
        return new ResponseEntity<>(doctorUpdated, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOneDoctor(@PathVariable int id) {
        doctorService.deleteOneDoctor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
