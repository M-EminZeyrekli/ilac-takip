package com.medicinetracking.api.services.Abstract;

import java.util.List;

import com.medicinetracking.api.entities.Doctor;

public interface DoctorService {

    public List<Doctor> getAllDoctor();

    public Doctor getOneDoctor(int id);

    public Doctor postOneDoctor(Doctor doctor);

    public Doctor putOneDoctor(int id, Doctor doctor);

    public void deleteOneDoctor(int id);
}
