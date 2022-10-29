package com.medicinetracking.api.services.Abstract;

import java.util.List;

import com.medicinetracking.api.entities.Patient;

public interface PatientService{
    public List<Patient> getAllPatient();

    public Patient getOnePatient(int id);

    public Patient postOnePatient(Patient patient);

    public Patient putOnePatient(int id, Patient patient);

    public void deleteOnePatient(int id);
}
