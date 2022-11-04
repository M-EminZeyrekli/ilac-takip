package com.medicinetracking.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medicinetracking.api.entities.Doctor;
import com.medicinetracking.api.repositories.DoctorRepository;
import com.medicinetracking.api.services.Abstract.DoctorService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DoctorServiceImp implements DoctorService {
    private final DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAllDoctor() {
        List<Doctor> list = doctorRepository.findAll();
        return list;
    }

    @Override
    public Doctor getOneDoctor(int id) {
        Doctor doctor = doctorRepository.findById(id).orElseThrow();
        return doctor;
    }

    @Override
    public Doctor postOneDoctor(Doctor doctor) {
        Doctor doctorAdded = doctorRepository.save(doctor);
        return doctorAdded;
    }

    @Override
    public Doctor putOneDoctor(int id, Doctor doctor) {
        getOneDoctor(id);
        doctor.setId(id);
        return doctorRepository.save(doctor);
    }

    @Override
    public void deleteOneDoctor(int id) {
        getOneDoctor(id);
        doctorRepository.deleteById(id);
    }

}
