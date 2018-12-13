import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Import it up here

import {SignupData} from './signup/signup.component'

// class User{
//   username:any;
//   password:any;
// }
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  // ,'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

url :any;
  constructor(private http: HttpClient) { }

  signUp(data): Observable<any> {
         this.url = 'http://localhost:8400/api/signup';
         
      //   console.log("signupData"+data.toString());
         //console.log("name "+data.username);
        // console.log("passowrd "+data.username);
        return this.http.post(this.url,data,httpOptions)
        .pipe(map((response: any) => response));
  }
  getUsers(userName ,password) {
    this.url = 'http://localhost:8400/api/login';
    return this.http.get(this.url,{params:{userName:userName,password:password}})
  }
  addRoutePattren(data): Observable<any> {
    this.url = 'http://localhost:8400/api/addRoutepattren';
   return this.http.post(this.url,data,httpOptions)
}

GetRoutePattren(): Observable<any> {
  this.url = 'http://localhost:8400/api/getRoutepattren';
 return this.http.get(this.url,httpOptions)
 //.pipe(map((response: any) => response));
}


deleteRoutePattren(id): Observable<any> {
  this.url = 'http://localhost:8400/api/deleteRoutepattren/'+id;
 return this.http.delete(this.url,httpOptions)
}

}