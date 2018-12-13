import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from "../data.service"
import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  signupData :any;
  heroes = [];
  username ="";
  password ="";
  result :any;

  constructor(private formBuilder: FormBuilder,private router: Router, private dataService:DataService) 
  { 

   
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.submitted = true;
    // if (this.myForm.invalid) {
    //     return;
    // }
  this.username = this.myForm.get('name').value;
 
  this.password = this.myForm.get('password').value;
    this.dataService.getUsers(this.username,this.password).subscribe(data =>{
      this.result=data;
    if(this.result.data){
      this.router.navigate(['/home']);
      alert("login sucessfull");

    }else{
      alert("User Name or Password incorrect,please try again");
    }
    });
    console.log(this.heroes);
    
}
}
