import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent=new EventEmitter();

    @Output() childArrObjEvent=new EventEmitter();

    @Output() ChildDOBEvent=new EventEmitter();

  strdata:string="Data send from child...";

  arrproduct=[
    {
      name:'OnePlus',
      price:40000,
      qty:1
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'samsung',
      price:25000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strdata);
    this.childArrObjEvent.emit(this.arrproduct);
  }

  onSendDOB(datevalue:any){
    console.log(datevalue);
    this.ChildDOBEvent.emit(datevalue);
  }

}
