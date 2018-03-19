import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='LuxProtoss';
  url='http://www.google.com';
  now=new Date;

  zzz(){
    console.log("123456");
  }

  aaa:Account={
    account:'lux',
    password:'abc123'
  }
}




export interface Account{
  account:string,
  password:string
}
