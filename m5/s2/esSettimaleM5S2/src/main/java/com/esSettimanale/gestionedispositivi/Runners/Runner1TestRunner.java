package com.esSettimanale.gestionedispositivi.Runners;

import com.esSettimanale.gestionedispositivi.Services.DeviceService;
import com.esSettimanale.gestionedispositivi.Services.UserService;
import com.esSettimanale.gestionedispositivi.auth.entity.ERole;
import com.esSettimanale.gestionedispositivi.auth.entity.Role;
import com.esSettimanale.gestionedispositivi.auth.entity.User;
import com.esSettimanale.gestionedispositivi.auth.repository.RoleRepository;
import com.esSettimanale.gestionedispositivi.models.Device;
import com.esSettimanale.gestionedispositivi.models.DeviceStatus;
import com.esSettimanale.gestionedispositivi.models.DeviceType;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Runner1TestRunner implements ApplicationRunner {

    @Autowired 
    private UserService userService;
    
    @Autowired 
    private DeviceService deviceService;

    @Autowired 
    RoleRepository roleRepository;

    public void run(ApplicationArguments args) throws Exception {
      Role adminRole = new Role();
      adminRole.setRoleName(ERole.ROLE_ADMIN);
      roleRepository.save(adminRole);

      Set<Role> roles = new HashSet<>();
      roles.add(adminRole);
      
      // Create a new user with an admin role
      User user1 = new User();
      user1.setPassword("marco");
      user1.setName("Marco");
      user1.setEmail("Marco@g.com");
      user1.setRoles(roles);
      user1.setUsername("jìm");
        
      // Save the user to the database
      userService.saveUser(user1);

      // Create a new device
      Device device1 = new Device();
      device1.setDeviceStatus(DeviceStatus.DISPOSITIVO_ASSEGNATO);
      device1.setUser(user1);
      device1.setDeviceType(DeviceType.SMARTPHONE);
      deviceService.save(device1);
    }
}