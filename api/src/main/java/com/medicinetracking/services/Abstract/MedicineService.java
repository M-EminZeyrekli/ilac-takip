package com.medicinetracking.services.Abstract;

import java.util.List;

import com.medicinetracking.api.entities.Medicine;

public interface MedicineService {
    public List<Medicine> getAllMedicine();

    public Medicine getOneMedicine(int id);

    public Medicine postOneMedicine(Medicine medicine);

    public Medicine putOneMedicine(int id, Medicine medicine);

    public void deleteOneMedicine(int id);
}
