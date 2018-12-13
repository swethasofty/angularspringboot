package com.example.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
//import javax.persistence.*;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="USER")

@NamedQueries({
	@NamedQuery(
		      name = "User.findUserByNameAndPassword",
		      query = "from User u where u.username=:username AND u.password =:password"
		      ),
		@NamedQuery(
		      name = "User.findUserByName",
		      query = "from User a where a.username =:username"
		      )
})
public class User implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String username;
	
	@Column
	private String password;
	
	public User()
	{}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}
