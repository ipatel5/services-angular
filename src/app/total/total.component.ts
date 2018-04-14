import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  data = 0;



  constructor(private totalsserv: AddService) {

  }


  ngOnInit() {
    this.totalsserv.myMethodSubject2.subscribe((data) => {
      this.data = data;
    })

  }







}
