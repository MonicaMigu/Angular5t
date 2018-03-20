import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
  @ViewChild('pc') pc:ElementRef;
  number1:any;
  number2:any;
  numberAdd=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.number1 = this.route.snapshot.params.number1;
    this.number2 = this.route.snapshot.params.number2;
    this.numberAdd = Number(this.number1)+Number(this.number2);
  }

  addcr(){
    this.pc.nativeElement.classList.add('rdd');
  }

  addcpurple(){
    this.pc.nativeElement.classList.add('pdd');
  }

  rmc(){
    this.pc.nativeElement.classList.remove('rdd');
  }
}
