package com.medicinetracking.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicinetracking.api.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
