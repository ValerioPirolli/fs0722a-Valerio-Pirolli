package com.esSettimanale.gestionedispositivi.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esSettimanale.gestionedispositivi.models.Device;
import com.esSettimanale.gestionedispositivi.repositories.DeviceRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;

@Service
public class DeviceService {
    
    @Autowired DeviceRepository deviceRepository;

    public Device save(Device device){
       return deviceRepository.save(device);
    }

    public void deleteById(Long id){
        if(deviceRepository.findById(id).isEmpty()){
            throw new EntityNotFoundException("Device not found with that id");
        }else{
            deviceRepository.deleteById(id);
        }
        
    }

    public Device findById(Long id){
        if(deviceRepository.findById(id).isEmpty()){
            throw new EntityNotFoundException("Device not found with that id");
        }else{
            return deviceRepository.findById(id).get();
        }
    }

    public List<Device> findAll(){
        return deviceRepository.findAll();
    }

}
