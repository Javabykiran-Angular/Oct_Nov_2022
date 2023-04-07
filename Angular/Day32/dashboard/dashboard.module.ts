import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { DetailsComponent } from '../details/details.component';
import { FilterPipe } from '../filter.pipe';
import { UpdateempComponent } from '../updateemp/updateemp.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    HomeComponent,
     HeaderComponent,
    DetailsComponent,
    AddemployeeComponent,
    UpdateempComponent,
    FilterPipe,
     
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
  ]
})
export class DashboardModule { }
