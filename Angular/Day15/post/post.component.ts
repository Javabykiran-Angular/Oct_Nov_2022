import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.GetPost();
  }

  GetPost(){
      this.service.getPost()
      .subscribe((myresponse:any)=>{
          // console.log(myresponse);
          this.posts=myresponse;
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

}
