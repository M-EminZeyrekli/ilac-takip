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

import com.medicinetracking.api.entities.Medicine;
import com.medicinetracking.api.services.Abstract.MedicineService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/medicine")
@CrossOrigin
@RequiredArgsConstructor
public class MedicineController {
    private final MedicineService medicineService;

    @GetMapping
    public ResponseEntity<?> getAllMedicine() {
        List<Medicine> list = medicineService.getAllMedicine();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOneMedicine(@PathVariable(name = "id", required = true) int id) {
        Medicine medicine = medicineService.getOneMedicine(id);
        return new ResponseEntity<>(medicine, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> postOneMedicine(@RequestBody Medicine medicine) {
        Medicine medicineAdded = medicineService.postOneMedicine(medicine);
        return new ResponseEntity<>(medicineAdded, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> putOneMedicine(@PathVariable(name = "id", required = true) int id,
            @RequestBody Medicine medicine) {
        Medicine medicineUpdated = medicineService.putOneMedicine(id, medicine);
        return new ResponseEntity<>(medicineUpdated, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOneMedicine(@PathVariable int id) {
        medicineService.deleteOneMedicine(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
