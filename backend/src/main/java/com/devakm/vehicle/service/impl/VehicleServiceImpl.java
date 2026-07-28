package com.devakm.vehicle.service.impl;

import com.devakm.vehicle.domain.entity.Vehicle;
import com.devakm.vehicle.repository.VehicleRepository;
import com.devakm.vehicle.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

  @Autowired
  private VehicleRepository vehicleRepository;

  @Override
  public List<Vehicle> findAll() {
    return vehicleRepository.findAll();
  }

  @Override
  public Vehicle save(Vehicle vehicle) {
    return vehicleRepository.save(vehicle);
  }

  @Override
  public void deleteById(Long id) {
    vehicleRepository.deleteById(id);
  }
}
