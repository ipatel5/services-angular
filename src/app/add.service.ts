import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddService {

   myMethodSubject2 = new Subject<number>();
  
  
  one  ;
  two;
  totalvar;
 
  constructor() { 
   
   
  }

addMethod(i){
this.one=i
this.total();

}
addmethod2(j)
{
this.two=j;
this.total();

}

total(){

  if(this.one == undefined)
  {
     this.totalvar = 0 + this.two;
     this.myMethodSubject2.next(this.totalvar)
     
    
  }
  else if(this.two == undefined)
  {
       this.totalvar = this.one +0;
       this.myMethodSubject2.next(this.totalvar);
       
  } else{
     this.totalvar=this.one + this.two;
     this.myMethodSubject2.next(this.totalvar);
   
  }
 
}
  
}
