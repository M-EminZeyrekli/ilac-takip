package com.medicinetracking.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medicinetracking.api.entities.Patient;
import com.medicinetracking.api.repositories.PatientRepository;
import com.medicinetracking.api.services.Abstract.PatientService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PatientServiceImp implements PatientService {
    private final PatientRepository patientRepository;

    @Override
    public List<Patient> getAllPatient() {
        List<Patient> list = patientRepository.findAll();
        return list;
    }

    @Override
    public Patient getOnePatient(int id) {
        return patientRepository.findById(id).orElseThrow();
    }

    @Override
    public Patient postOnePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient putOnePatient(int id, Patient patient) {
        getOnePatient(id);
        patient.setId(id);
        return patientRepository.save(patient);
    }

    @Override
    public void deleteOnePatient(int id) {
        getOnePatient(id);
        patientRepository.deleteById(id);
    }

}
