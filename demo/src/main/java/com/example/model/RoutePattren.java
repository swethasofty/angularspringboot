package com.example.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="RoutePattren")

public class RoutePattren implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String service;
	
	@Column
	private String routingType;
	
	@Column
	private String mta;
	
	@Column
	private String lata;
	
	
	@Column
	private String customName;
	
	@Column
	private String PSAPNameId;
	
	public RoutePattren()
	{}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getRoutingType() {
		return routingType;
	}

	public void setRoutingType(String routingType) {
		this.routingType = routingType;
	}

	public String getMta() {
		return mta;
	}

	public void setMta(String mta) {
		this.mta = mta;
	}

	public String getLata() {
		return lata;
	}

	public void setLata(String lata) {
		this.lata = lata;
	}

	public String getCustomName() {
		return customName;
	}

	public void setCustomName(String customName) {
		this.customName = customName;
	}

	public String getPSAPNameId() {
		return PSAPNameId;
	}

	public void setPSAPNameId(String pSAPNameId) {
		PSAPNameId = pSAPNameId;
	}
	
	

}
