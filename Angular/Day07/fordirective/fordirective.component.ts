import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core java','Advanced Java','Spring Boot','JSP','Angular 12','AWS','Jenkings','Docker'];

  arrproduct=[
    {
      name:'OnePlus',
      price:40000,
      qty:1
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'samsung',
      price:25000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    }
  ]
  selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over Event Occur.......");
    this.selected=item.name
  }

  onMouseOut(){
    this.selected='';
  }

}
