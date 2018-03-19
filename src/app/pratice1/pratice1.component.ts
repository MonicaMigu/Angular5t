import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice1',
  templateUrl: './pratice1.component.html',
  styleUrls: ['./pratice1.component.css']
})
export class Pratice1Component implements OnInit {

  filter:string
  constructor() { }

  ngOnInit() {
  }

  dic:EnglishDic[]=[]

  word:EnglishDic={
    English:'',
    Chinese:''
  }

  save(){
    console.log(this.word)

    let _dic:EnglishDic=Object.assign({},this.word);

    this.dic.push(_dic);
    console.log(this.dic)
  }

}


export interface EnglishDic{
  English:string,
  Chinese?:string
}