import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
  }

}
