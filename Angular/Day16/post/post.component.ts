import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title:string='';
  body!:string;
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetPost();
  }

  GetPost(){
      this.service.getPost()
      .subscribe((myresponse:any)=>{
          // console.log(myresponse);
          this.posts=myresponse;
      },(myerror)=>{
          // alert("Error is occured ...")
          if(myerror.status>=400 && myerror.status<=499){
            alert("Client side error "+myerror.status)
          }else if(myerror.status>=500 && myerror.status<=599){
            alert("Server side error "+myerror.status)
          }else{
            alert("Something went wrong.. "+myerror.status)
          }
          
      })
  }

  onSend(inputtitle:any,inputbody:any){
    let obj={
        title:inputtitle,
        body:inputbody
    }

    this.service.Postdata(obj)
    .subscribe((response)=>{
        console.log(response);
    })

  }

  onEdit(post:any){
    this.id=post.id;
    this.title=post.title;
    this.body=post.body;
    this.isHidden=false;

  }

  onupdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }
    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onDelete(id:any){
      this.service.DeleteData(id)
      .subscribe((response)=>{
        console.log(response);

      })
  }

}
