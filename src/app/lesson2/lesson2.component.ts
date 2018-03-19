import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  @Input()  abc = 100;
  @Output() countChange:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  show=true;
  Score=0;

  view(){
    this.show=!this.show;
  }

  change(event:any){
    this.countChange.emit(event)
    // console.log(event)
  }

}
