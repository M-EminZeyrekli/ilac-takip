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
@Table(name = "patient")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Patient {
    @Id
    @GeneratedValue
    @Column(name = "patient_id")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age")
    private int age;

    @Column(name = "weight")
    private int weight;

    @Column(name = "height")
    private double height;

    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(name = "gender")
    private String gender;

    
}