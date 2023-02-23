import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  strdata:string='Send data from parent';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  nameData:string='';
  mydate:string='';

  @Input() CourseData:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSend(myname:string){
    this.nameData=myname;
  }

}
