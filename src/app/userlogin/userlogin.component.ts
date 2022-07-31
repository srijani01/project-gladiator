import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
userName:string=''
password:string=''
  constructor(private router:Router,private rs:RegistrationService) { }

  ngOnInit(): void {
  }
  login(user:string,pass:string){
    this.userName=user;
    this.password=pass;
    if(this.userName=='admin'&& this.password=='admin')
    this.router.navigate(['userlogin/',this.userName]);
    else{
      console.log(this.userName+" "+this.password)
      //this.rs.userlogin(this.userName,this.password).subscribe(()=>{
        //this.router.navigate(['userlogin/:user',this.userName])
      //})
    }
  }

}
