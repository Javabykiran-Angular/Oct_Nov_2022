import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparamater',
  templateUrl: './queryparamater.component.html',
  styleUrls: ['./queryparamater.component.css']
})
export class QueryparamaterComponent implements OnInit {

  jsonObj:any={};
  dataReceived:string='';
  constructor(private route:ActivatedRoute,
              private notifyservice:NotificationService) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
    this.getEmitteddata();
  }

  getEmitteddata(){
      this.notifyservice.notification
      .subscribe((data)=>{
        this.dataReceived=data;
      })
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.jsonObj.myid=+param.get("id");
        this.jsonObj.myname=param.get("fname");
        this.jsonObj.myrole=param.get("role");
      })
  }

  onSend(msg:string){
    this.notifyservice.SendMessage(msg);
  }

}
