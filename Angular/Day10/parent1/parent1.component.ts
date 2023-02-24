import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  childStrdata:string='';
  childArrObj:any[]=[];

   @Output() ParentDOBData=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend(mydate:any){
    this.ParentDOBData.emit(mydate);
  }

}
