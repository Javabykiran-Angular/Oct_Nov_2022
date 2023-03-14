import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteeuserComponent } from './deleteeuser/deleteeuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
    {
      path:"",component:ListuserComponent
    },
    {
      path:"adduser",component:AdduserComponent
    },
    {
      path:"updateuser",component:UpdateuserComponent
    },
    {
      path:"deleteuser",component:DeleteeuserComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
