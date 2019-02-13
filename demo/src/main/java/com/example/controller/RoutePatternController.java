

package com.example.controller;

import java.util.List;

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

import com.aditi.insight.exception.InsightException;
import com.example.dto.RestResponse;
import com.example.model.User;
import com.example.model.RoutePattren;
import com.example.repository.RoutePattrenRepo;

import org.springframework.web.bind.annotation.RequestMethod;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")


public class RoutePatternController {
	@Autowired
	RoutePattrenRepo routePattrenRepo;
	
	@RequestMapping(value = "/addRoutepattren", method = RequestMethod.POST)
	public RestResponse addRoutepattren(@Valid @RequestBody final RoutePattren PattrenData) {
		
	System.out.println("in save="+PattrenData.getService());
	//	String status ="";
	
		//User user =  routePattrenRepo.findUserByName(inUser.getUsername());
		
		
		RoutePattren routeData = routePattrenRepo.save(PattrenData);
			
			return new RestResponse(RestResponse.SUCCESS,routeData);
		
	}
	
	@RequestMapping(value = "/getRoutepattren", method = RequestMethod.GET)
	private List<RoutePattren> GetRoutePattren() {
		
		List<RoutePattren> routeData = routePattrenRepo.findAll();
		return routeData;
		
				
	}
	
	@RequestMapping(value = "/deleteRoutepattren/{id}", method = RequestMethod.DELETE)
	public List<RoutePattren> addRoutepattren(@PathVariable("id") int id){
		
		 routePattrenRepo.deleteById(id);
			
			return GetRoutePattren();
		
	}
	
	@RequestMapping(value = "/updateRoutepattren/{id}", method = RequestMethod.PUT)
	public RestResponse updateRoutepattren(@PathVariable("id") Integer id, @RequestBody final RoutePattren PattrenData) {
		
		RoutePattren routeData = routePattrenRepo.findAllById(id);
		routeData.setService(PattrenData.getService());
		routeData.setLata(PattrenData.getLata());
		routeData.setMta(PattrenData.getMta());
		routeData.setCustomName(PattrenData.getCustomName());
		routeData.setRoutingType(PattrenData.getRoutingType());
//		
		RoutePattren routeData1 = routePattrenRepo.save(routeData);
		
		return new RestResponse(RestResponse.SUCCESS,routeData1);
	}
}
