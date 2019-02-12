import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from "../data.service"
export interface RouteData{
  id :number;
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
routePttrenDetails:RouteData[];
routePttrenDetail=[];
  constructor(private dataService:DataService) {

  
   }

  ngOnInit() {

    
    this.dataService.GetRoutePattren().subscribe(data => {
      this.routePttrenDetails=data;
    })
  }
  display(){

  }
  add(routeData)
  {
    if(this.edit){
alert("edit true");
this.dataService.updateData(routeData).subscribe((data) => {
  this.routePttrenDetails = data;
  
 
});
    }else{
    this.routeData.service = this.routeData.service;
    this.routeData.routingType = this.routeData.routingType;
    this.routeData.mta = this.routeData.mta;
    this.routeData.lata = this.routeData.lata;
    this.routeData.customName = this.routeData.customName;
    this.routeData.PSAPNameId = this.routeData.PSAPNameId;
  //  this.dataService.addRoutePattren(this.routeData).subscribe(data =>{this.routePttrenDetail.push(data)
  this.dataService.addRoutePattren(this.routeData).subscribe(data => {
    this.routePttrenDetails.push(data.data);
   // this.routePttrenDetails=this.routePttrenDetail;
    });
  }
   // alert(this.service);
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
