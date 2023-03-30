import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { HttpService } from '../utility/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empObj=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
  }

  GetdataFromUrl(){
    this.route.paramMap
    .subscribe((param:any)=>{
      console.log(param.get('id'))
      this.GetParticularData(param.get('id'))
    })
  }

  GetParticularData(id:any){
    this.service.getParticularRecord(id)
    .subscribe((response:any)=>{
        // console.log(response);
        this.empObj=response;
        console.log(this.empObj);

    });
  }

}
