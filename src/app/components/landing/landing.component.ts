import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
splashActive:boolean=true;
  constructor() { 
    setTimeout(()=>{
      this.splashActive=false;
    },3000)

    
  }

  ngOnInit(): void {
  }

}
