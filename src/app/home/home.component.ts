import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  a:any;
  b:any;
 arr:any=[{TITLE:'About',ISSELECT:false},{TITLE:'Education',ISSELECT:false},{TITLE:'Skills',ISSELECT:false},{TITLE:'Work',ISSELECT:false}];
  ngOnInit() {
  }

  navigate(id){
    for(var i =0;i<this.arr.length;i++){
        this.arr[i].ISSELECT = false;
    }
    switch(id.TITLE){
          case 'About' : this.router.navigate(['./About']);
          id.ISSELECT = true;
          break;

          case 'Education' : this.router.navigate(['./Education']);
          id.ISSELECT = true;
          break;

          case 'Skills' : this.router.navigate(['./Skills']);
          id.ISSELECT = true;
          break;

          case 'Work' : this.router.navigate(['./Work']);
          id.ISSELECT = true;
          break;
    }
  
  }
}
