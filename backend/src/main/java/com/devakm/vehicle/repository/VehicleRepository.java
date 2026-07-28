package com.devakm.vehicle.repository;

import com.devakm.vehicle.domain.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    boolean existsByVehicleNumber(String vehicleNumber);

}