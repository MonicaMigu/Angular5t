import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  les6:string;

  constructor() { }

  ngOnInit() {
  }

  abc(event:any){
    this.les6=event
    // console.log(event)
  }

  aaa(){
    console.log("Hello");
  }

  bbb(){
    alert("Hello Ha");
  }

  ccc(){
    this.les6="HI HI";
  }
}
