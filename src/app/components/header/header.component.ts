import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLinkActive:Array<boolean> = [true,false,false];

  constructor() { }

  ngOnInit() {
  }


  activateLink(linkName:string){
    if(linkName==='Tournaments'){
      this.isLinkActive[0]=false;
      this.isLinkActive[1]=true;
      this.isLinkActive[2]=false;
    }
    else if(linkName==='Fixtures'){
      this.isLinkActive[0]=true;
      this.isLinkActive[1]=false;
      this.isLinkActive[2]=false;
    }
    else if(linkName==='Standings'){
      this.isLinkActive[0]=false;
      this.isLinkActive[1]=false;
      this.isLinkActive[2]=true;
    }

  }

}
