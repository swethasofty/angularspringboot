package com.example.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.RestResponse;
import com.example.model.User;
import com.example.repository.UserRepo;

import org.springframework.web.bind.annotation.RequestMethod;






@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserRepo userRepo;
	
	@GetMapping("")
	private String getUser() {

		return "ping";
	}
	
	//@PostMapping("/signup")
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public RestResponse signUp(@Valid @RequestBody final User inUser) {
		
		System.out.println("in save=" +inUser.getUsername() +"="+inUser.getPassword());
		String status ="";
	
		User user =  userRepo.findUserByName(inUser.getUsername());
		
		if(user ==null )
		{
			user =	userRepo.save(inUser);
			
			return new RestResponse(RestResponse.SUCCESS,user);
		}else {
			System.out.println("User Already Exsists");
			status = "User Already Exsists";
			return new RestResponse(RestResponse.FAILED,user, status);
		}
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	private RestResponse getUser(@RequestParam(value = "userName", required = false) String inUserName,
			@RequestParam(value = "password", required = false) String inPassword) {
		String status ="";
		User  user = userRepo.findUserByNameAndPassword(inUserName,inPassword);
	
		if(user !=null )
		{	
			status = "Login Successfull";
			return new RestResponse(RestResponse.SUCCESS,user,status);
		}else {
			System.out.println("User not autorized");
			status = "User not autorized";
			return new RestResponse(RestResponse.FAILED,user, status);
		}
		
	}
	

	
	@GetMapping("/user/{id}")
	private User getUser(@PathVariable(value = "id")final int inUserId) {
		
		User user =	userRepo.findById(inUserId)
				    .orElse(null);
		
		
		return user;
	}
	
	

}
