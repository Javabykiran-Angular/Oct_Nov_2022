import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    emitteddata:string='';
  constructor(private service:NotificationService) { }

  ngOnInit(): void {
    this.getEmitteddata();
  }

  getEmitteddata(){
      this.service.notification
      .subscribe((data)=>{
        this.emitteddata=data;
      })
  }

}
