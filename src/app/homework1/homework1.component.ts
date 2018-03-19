import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  filter:string
  dic:ScoreDic[]=[]

  SingleScore:ScoreDic={
    name:"",
    score:""
  }

  save(){
    console.log(this.SingleScore)

    let _dic:ScoreDic=Object.assign({},this.SingleScore)

    this.dic.push(_dic)

    console.log(this.dic)

  }
}

export interface ScoreDic{
  name:string,
  score:string
}
