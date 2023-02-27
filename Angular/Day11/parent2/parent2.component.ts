import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,AfterViewInit {

  @ViewChild('mydiv') divElement!:ElementRef<HTMLDivElement>;

  @ViewChild(Child3Component) childAccess!:Child3Component;


  constructor() { }

  ngOnInit(): void {
    console.log(this.divElement);
  }
  ngAfterViewInit(): void {
    console.log(this.divElement);
    console.log(this.divElement.nativeElement.innerText);

    // this.divElement.nativeElement.className='divclass';
    this.divElement.nativeElement.classList.add("divmargin",'divclass');

  }

  onPropertyAccess(){
      this.childAccess.username="Sumit Raokhande";
  }

  onMethodAccess(){
      this.childAccess.onAlert();
  }

}
