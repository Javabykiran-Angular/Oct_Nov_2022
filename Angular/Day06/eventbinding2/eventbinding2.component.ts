import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  res:number=0;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){

      let n1=+num1;
      let n2=+num2;

      // this.result=num1+num2;
        this.result=n1+n2;
  }

  onChange(){
    console.log("Change Event Occur...")
    // alert("hasdhgvkh");
  }

  onKeyUp(){
    console.log("Key up Event Occur...")
  }
  onKeyDown(){
    console.log("Key down Event Occur...");
  }

  onEnterKeyUp(){
    console.log("Key Board event Occur...")
  }

}
