import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;

  jsonObj={
    color:"blueviolet",
    fontFamily:"Cambria, Cochin",
    "font-size":'32px'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
