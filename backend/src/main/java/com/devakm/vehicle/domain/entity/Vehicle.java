package com.devakm.vehicle.domain.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String vehicleType;

    @Column(nullable = false, unique = true)
    private String vehicleNumber;

    @Column(nullable = false)
    private String ownerName;

    private String email;
    private String phoneNo;

    @Column(length = 1000)
    private String issueWithVehicle;

    @Column(nullable = false)
    private LocalDate arrivalDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getIssueWithVehicle() {
        return issueWithVehicle;
    }

    public void setIssueWithVehicle(String issueWithVehicle) {
        this.issueWithVehicle = issueWithVehicle;
    }

    public LocalDate getArrivalDate() { // <-- 3. Changed getter return type
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) { // <-- 4. Changed setter parameter type
        this.arrivalDate = arrivalDate;
    }
}