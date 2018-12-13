package com.example.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.model.User;
import com.example.model.RoutePattren;


@Repository
public interface RoutePattrenRepo extends JpaRepository <RoutePattren, Integer>{

}
