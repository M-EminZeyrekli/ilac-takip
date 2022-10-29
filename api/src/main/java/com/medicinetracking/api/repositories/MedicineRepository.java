package com.medicinetracking.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicinetracking.api.entities.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Integer> {

}
