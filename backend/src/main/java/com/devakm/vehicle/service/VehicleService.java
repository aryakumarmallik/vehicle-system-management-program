package com.devakm.vehicle.service;

import com.devakm.vehicle.domain.entity.Vehicle;
import java.util.List;

public interface VehicleService {
  List<Vehicle> findAll();
  Vehicle save(Vehicle vehicle);
  void deleteById(Long id);
}
