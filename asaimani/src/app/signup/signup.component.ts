import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {DataService} from "../data.service"
export class SignupData{
  username:string;
  password:any;
}

declare var M : any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  success = false;
  signupData :any;
  status :string ="";
  heroes = [];

  constructor(private formBuilder: FormBuilder,private router: Router, private dataService:DataService) 
  { 

    this.signupData=new SignupData;
  }
 
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signup() {
    this.submitted = true;
    if (this.myForm.invalid) {
        return;
    }
  this.signupData.username = this.myForm.get('name').value;
 
  this.signupData.password = this.myForm.get('password').value;
    this.dataService.signUp(this.signupData).subscribe(data =>{ 
      this.heroes.push(data);
      if(data.success)
      {
        M.toast({html:"signUp Successfull", classes :'rouned'});
        this.router.navigate((['/']));
      }else{
        M.toast({html:"User Already Exsists", classes :'rouned'});
      }
    });
    this.success = true;
    console.log(this.heroes);
    
}

}
