package com.devakm.vehicle.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.devakm.vehicle.domain.entity.Vehicle;
import com.devakm.vehicle.service.VehicleService;
import com.devakm.vehicle.repository.VehicleRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "https://vehicle-system-management-program.vercel.app"})
public class VehicleController {

  private final VehicleService vehicleService;
  private final VehicleRepository vehicleRepository;

  public VehicleController(VehicleService vehicleService, VehicleRepository vehicleRepository) {
    this.vehicleService = vehicleService;
    this.vehicleRepository = vehicleRepository;
  }

  @GetMapping
  public List<Vehicle> getAllVehicles() {
    return vehicleService.findAll();
  }

  @PostMapping
  public ResponseEntity<?> createVehicle(@RequestBody Vehicle vehicle) {

    if (vehicleRepository.existsByVehicleNumber(vehicle.getVehicleNumber())) { // checking duplication
      return ResponseEntity
              .status(HttpStatus.BAD_REQUEST)
              .body("Error: A vehicle with number " + vehicle.getVehicleNumber() + " already exists!");
    }

    Vehicle savedVehicle = vehicleService.save(vehicle);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedVehicle);
  }

  @DeleteMapping("/{id}")
  public void deleteVehicle(@PathVariable Long id) {
    vehicleService.deleteById(id);
  }

  @PutMapping("/{id}")
  public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicle) {
    vehicle.setId(id);
    return vehicleService.save(vehicle);
  }
}
