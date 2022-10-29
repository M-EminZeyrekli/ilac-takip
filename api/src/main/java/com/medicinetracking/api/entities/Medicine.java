package com.medicinetracking.api.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "medicine")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medicine {
    
    @Id
    @GeneratedValue
    @Column(name = "medicine_id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "medicine_type")
    private String medicineType;
}
