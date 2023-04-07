import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';

import { NotfoundComponent } from './notfound/notfound.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';

import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';

import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    NotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
    ModalModule.forRoot(),
    MaterialModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent]
})
export class AppModule { }
