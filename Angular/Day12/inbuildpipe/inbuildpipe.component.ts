import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {
 
  strdetails:string='Hopes so U r enjoying Angular 12 module';

  num2:number=-452.78956324557;

  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
