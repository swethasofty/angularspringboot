import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from "../data.service"
export interface RouteData{
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
  service:any;
  routingType:any;
  mta:any;
  lata:any;
  customName:any;
  PSAPNameId:any;
  routeData: RouteData = {};
  check :boolean;
title="ssss";
routePttrenDetails:RouteData[];
routePttrenDetail=[];
  constructor(private dataService:DataService) {

  
   }

  ngOnInit() {
    this.dataService.GetRoutePattren().subscribe(data => {
    //  this.routePttrenDetail.push(data)
      this.routePttrenDetails=data;
      alert(this.routePttrenDetails.every);
    })
  }
  display(){

  }
  add()
  {
    this.routeData.service = this.service;
    this.routeData.routingType = this.routingType;
    this.routeData.mta = this.mta;
    this.routeData.lata = this.lata;
    this.routeData.customName = this.customName;
    this.routeData.PSAPNameId = this.PSAPNameId;
  //  this.dataService.addRoutePattren(this.routeData).subscribe(data =>{this.routePttrenDetail.push(data)
  this.dataService.addRoutePattren(this.routeData).subscribe(data => {
    this.routePttrenDetails.push(data.data);
   // this.routePttrenDetails=this.routePttrenDetail;
    });
    alert(this.service);
  }

  delete(i,a){
    this.dataService.deleteRoutePattren(i.id).subscribe(data => {
      this.routePttrenDetails=data;
     
      });
  }

}
