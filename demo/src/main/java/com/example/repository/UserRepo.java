package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	public User findUserByName(@Param("username") String username);
	public User findUserByNameAndPassword(@Param("username") String username,@Param("password") String password);

}
