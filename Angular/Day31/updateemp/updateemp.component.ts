import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../utility/http.service';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {


  @Input() parentdata:Employee=<Employee>{};
  allCountry:any[]=[];

  issubmitDissabled:boolean=true;
  backendResponse:string='';
  constructor(private service:HttpService) { }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  ngOnInit(): void {
    this.GetAllCountry();
  }

  onupdate(){

    
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    this.service.UpdateData(this.parentdata)
    .subscribe((response)=>{
      this.issubmitDissabled=false;
      this.backendResponse=response;
    })

  }

}
