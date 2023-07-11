import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cs:CommonService){

  }
  title = 'app3';
  myStudentName = "Ram Krishna";
  myUsers:any = []
  changeStudentName(){
    this.myStudentName = "Murali krishna"
  }
  showUsers(){
    this.cs.getUsers().subscribe((res)=>{
      this.myUsers = res
    })
    // this.myUsers = ["Ram","Ravi","Sam","Sundar"]
  }
}
