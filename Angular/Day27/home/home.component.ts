import { Component, OnInit } from '@angular/core';
import { HttpService } from '../utility/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empdata:any[]=[];
 
  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetRecords();
  }
  
  GetRecords(){
      this.service.getRecords()
      .subscribe((response:any)=>{
        console.log(response);

        this.empdata=response;

      })
  }

}
