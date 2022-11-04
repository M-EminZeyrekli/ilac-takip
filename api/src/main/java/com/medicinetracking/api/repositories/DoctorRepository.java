package com.medicinetracking.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicinetracking.api.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

}
