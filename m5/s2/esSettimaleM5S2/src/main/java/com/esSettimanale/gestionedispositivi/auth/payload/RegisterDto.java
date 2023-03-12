package com.esSettimanale.gestionedispositivi.auth.payload;

import java.util.Set;

import com.esSettimanale.gestionedispositivi.auth.entity.ERole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String name;
    private String username;
    private String email;
    private String password;
    private Set<String> roles;
}
