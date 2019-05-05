import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from "../data.service"
export interface RouteData{
  id ?:number;
  service ?:string;  //? stands for property is optional
  routingType ?:any;
  mta ?:string ;
  lata ?:any;
  customName ?:string;
  PSAPNameId ?:any;
}
@Component({
  selector: 'app-add-route-pattren',
  templateUrl: './add-route-pattren.component.html',
  styleUrls: ['./add-route-pattren.component.scss']
})
export class AddRoutePattrenComponent implements OnInit {
  id :null;
  service:any;
  routingType:any;
  mta:any;
  lata:any;
  customName:any;
  PSAPNameId:any;
  routeData: RouteData = {};
  check :boolean;
  edit :boolean = false;
title="ssss";
routePttrenDetails:RouteData[]=[];
routePttrenDetail=[];
  constructor(private dataService:DataService) {

  
   }

  ngOnInit() {
    this.displayAll();
  }
  displayAll(){ 
    this.dataService.GetRoutePattren().subscribe(data => {
      this.routePttrenDetails=data;
      console.dir(data);
    })

  }

  reset(){ 
    this.routeData.service = "";
    this.routeData.routingType = "";
    this.routeData.mta = "";
    this.routeData.lata = "";
    this.routeData.customName = "";
    this.routeData.PSAPNameId = "";
  }

  add(routeData)
  {
    if(this.edit){
    this.dataService.updateData(routeData).subscribe((data) => {
    this.routePttrenDetails = data;
    this.displayAll();
    this.reset();
  });
  }else{ 
  this.dataService.addRoutePattren(this.routeData).subscribe(data => {
    this.routePttrenDetails=data;
    this.displayAll();
    this.reset();
    });
  }
   
  }

  delete(i,a){
    this.dataService.deleteRoutePattren(i.id).subscribe(data => {
      this.routePttrenDetails=data;
     
      });
  }
  onEdit(emp){
    this.edit =true;
    this.routeData.id = emp.id;
    this.routeData.service = emp.service;
    this.routeData.routingType = emp.routingType;
    this.routeData.mta = emp.mta;
    this.routeData.lata =emp.lata;
    this.routeData.customName = emp.customName;
    this.routeData.PSAPNameId = emp.PSAPNameId;
   }
}
