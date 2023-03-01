import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quod repellendus eius est, commodi nobis eveniet ad nostrum eos. Blanditiis provident sapiente facere maxime nobis id corrupti consequatur veritatis labore?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quod repellendus eius est, commodi nobis eveniet ad nostrum eos. Blanditiis provident sapiente facere maxime nobis id corrupti consequatur veritatis labore?'
  constructor() { }

  ngOnInit(): void {
  }

}
