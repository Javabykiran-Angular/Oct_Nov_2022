import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../utility/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {


  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit(): void {
    document.body.className='bg_image';
  }
  ngOnDestroy(): void {
    document.body.className='';
  }


  onSubmit(f:NgForm){
   let obj={
    email:f.value.email,
    password:f.value.password
   }

    this.service.login(obj)
    .subscribe((response:any)=>{
      console.log(response);

        if(response.msg=="Valid User"){
          // this.incorrect=response.msg;

          sessionStorage.setItem("username",response.user.username)

          this.router.navigate(['/home']);

        }else{
          this.incorrect=response.msg;
        }


    })

}

}
