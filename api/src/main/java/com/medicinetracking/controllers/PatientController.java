package com.medicinetracking.controllers;

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

import com.medicinetracking.api.entities.Patient;
import com.medicinetracking.api.services.Abstract.PatientService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/patient")
@CrossOrigin
@RequiredArgsConstructor
public class PatientController {
    private final PatientService patientService;

    @GetMapping
    public ResponseEntity<?> getAllPatient() {
        List<Patient> list = patientService.getAllPatient();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOnePatient(@PathVariable(name = "id", required = true) int id) {
        Patient patient = patientService.getOnePatient(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> postOnePatient(@RequestBody Patient patient) {
        Patient patientAdded = patientService.postOnePatient(patient);
        return new ResponseEntity<>(patientAdded, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> putOnePatient(@PathVariable(name = "id", required = true) int id,
            @RequestBody Patient patient) {
        Patient patientUpdated = patientService.putOnePatient(id, patient);
        return new ResponseEntity<>(patientUpdated, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOnePatient(@PathVariable int id) {
        patientService.deleteOnePatient(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
