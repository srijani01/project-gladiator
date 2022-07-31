import { Injectable } from '@angular/core';
import { UserloginComponent } from './userlogin/userlogin.component';
import {HttpClient} from '@angular/common/http';
// import { ProductList } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl: string="";
  loginUrl: string=""


  constructor(private httpClient:HttpClient) { 
    // Userlogin(user:String, pass:String){
    //   return this.httpClient.get(this.baseUrl+'/'+user+'/'+pass);
    //}
  }

  
}
