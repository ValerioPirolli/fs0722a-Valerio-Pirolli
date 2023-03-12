package com.esSettimanale.gestionedispositivi.auth.service;

import com.esSettimanale.gestionedispositivi.auth.payload.LoginDto;
import com.esSettimanale.gestionedispositivi.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
