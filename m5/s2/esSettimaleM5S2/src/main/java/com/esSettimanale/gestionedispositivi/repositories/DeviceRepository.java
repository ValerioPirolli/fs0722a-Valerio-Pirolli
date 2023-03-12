package com.esSettimanale.gestionedispositivi.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esSettimanale.gestionedispositivi.models.Device;
import com.esSettimanale.gestionedispositivi.models.DeviceStatus;

@Repository
public interface DeviceRepository extends JpaRepository<Device,Long>{
    
    
	public Optional<List<Device>> findByDeviceStatus(DeviceStatus deviceStatus);

}
