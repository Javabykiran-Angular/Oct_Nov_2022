import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamater',
  templateUrl: './queryparamater.component.html',
  styleUrls: ['./queryparamater.component.css']
})
export class QueryparamaterComponent implements OnInit {

  jsonObj:any={};

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.jsonObj.myid=+param.get("id");
        this.jsonObj.myname=param.get("fname");
        this.jsonObj.myrole=param.get("role");
      })
  }

}
