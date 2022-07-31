import { Component, OnInit } from '@angular/core';
import { Iregister } from '../iregister';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  const iregister={custid:0,
          custname:'',
          custdob:'',
          email:'',
          phoneno:'',
          address:'',
          username:'',
          password:'',
          confirmedpassword:'',
          cardtype:'',
          bankaccno:'',
          ifsc:''}
  }

}
