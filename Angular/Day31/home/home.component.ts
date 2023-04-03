import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Employee } from '../model/employee';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empdata:any[]=[];
  empobj=<Employee>{};
  isradioCheck:boolean=false;
 
  modalRef!:BsModalRef; 

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };


  constructor(private service:HttpService,
    private modalservice:BsModalService
    ) { }

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

  onEdit(item:any){
    console.log(item);
    this.empobj=item;
    this.isradioCheck=true;
  }

  radioClick(){
      if(this.isradioCheck)
      return true;
      else
      return false;
  }

  OnUpdate(popup:TemplateRef<any>){
      if(this.radioClick()){
        //update the reord

        this.modalRef = this.modalservice.show(popup, this.config);

      }else{
        alert("Please Select a record to upadte..")
      }


  }

}
