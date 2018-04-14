import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AddService } from '../add.service';


@Component({
  selector: 'app-num1',
  templateUrl: './num1.component.html',
  styleUrls: ['./num1.component.css']
})
export class Num1Component implements OnInit {
num1=0;

@Output() method1 =new EventEmitter;
@Output() method2= new EventEmitter;

  /* constructor(private addservice:AddService) { 
    this.addservice.myMethod(this.num1)
  } */
constructor(private addser:AddService){

}
  ngOnInit() {
  }
  addMethod1(){
  this.num1++;
  this.addser.addMethod(this.num1);
 

   
  }
  subMethod1(){
    this.num1--;
  this.addser.addMethod(this.num1)
  }

}
