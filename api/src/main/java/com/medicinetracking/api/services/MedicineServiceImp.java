package com.medicinetracking.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medicinetracking.api.entities.Medicine;
import com.medicinetracking.api.repositories.MedicineRepository;
import com.medicinetracking.api.services.Abstract.MedicineService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MedicineServiceImp implements MedicineService {
    private final MedicineRepository medicineRepository;

    @Override
    public List<Medicine> getAllMedicine() {
        List<Medicine> list = medicineRepository.findAll();
        return list;
    }

    @Override
    public Medicine getOneMedicine(int id) {
        Medicine medicine = medicineRepository.findById(id).orElseThrow();
        return medicine;
    }

    @Override
    public Medicine postOneMedicine(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    @Override
    public Medicine putOneMedicine(int id, Medicine medicine) {
        getOneMedicine(id);
        medicine.setId(id);
        return medicineRepository.save(medicine);
    }

    @Override
    public void deleteOneMedicine(int id) {
        getOneMedicine(id);
        medicineRepository.deleteById(id);
    }

}