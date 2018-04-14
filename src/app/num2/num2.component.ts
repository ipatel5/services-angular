import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-num2',
  templateUrl: './num2.component.html',
  styleUrls: ['./num2.component.css']
})
export class Num2Component implements OnInit {
num2=0;

  constructor(private addservice:AddService) { }

  ngOnInit() {
  }
  addMethod2(){
    this.num2++;
    this.addservice.addmethod2(this.num2);
  }
  subMethod2(){
    this.num2--;
    this.addservice.addmethod2(this.num2);
  
  }
}
