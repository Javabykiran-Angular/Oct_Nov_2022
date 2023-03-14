import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteeuserComponent } from './deleteeuser/deleteeuser.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    ListuserComponent,
    UpdateuserComponent,
    DeleteeuserComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
