package com.esSettimanale.gestionedispositivi.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esSettimanale.gestionedispositivi.auth.entity.User;
import com.esSettimanale.gestionedispositivi.auth.repository.UserRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {
    
    @Autowired UserRepository userRepository;

    public void saveUser(User user){
        if(userRepository.existsByEmail(user.getEmail())){
            throw new EntityExistsException("Email already in use");
        }
        else{
            userRepository.save(user);
        }
    }

    public void delete(Long id){
        if(userRepository.findById(id).isEmpty()){
            throw new EntityNotFoundException("User not found with that id");
        }else{
            userRepository.deleteById(id);  
        }
        
    }

    public void deleteByEmail(String email){
        userRepository.deleteByEmail(email);
    }

    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }

    public User findById(Long id){
       if(userRepository.findById(id).isEmpty()){
            throw new EntityNotFoundException("User not found with that id");
       }else{
        return userRepository.findById(id).get();
       }
    }
    
    public User findByEmail(String email){
        if(userRepository.findByEmail(email).isEmpty()){
            throw new EntityNotFoundException("User not found with that email");
        }else{
            return userRepository.findByEmail(email).get();
        }
    }

    public List<User> findAllI(){
       return userRepository.findAll();
    }

   


}
