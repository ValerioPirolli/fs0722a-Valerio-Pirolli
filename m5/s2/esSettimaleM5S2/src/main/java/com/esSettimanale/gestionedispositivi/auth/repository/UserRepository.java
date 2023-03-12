package com.esSettimanale.gestionedispositivi.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esSettimanale.gestionedispositivi.auth.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User> findById(Long id);

    void deleteByEmail(String email);
}
