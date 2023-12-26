import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/app/services/user.service';
import { translateSubject } from 'src/app/services/translate.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user : any
  myData : any
  constructor(private _service : UserService,private router:Router , private translateSubject : translateSubject) { }
  ngOnInit(): void {
    this._service.getSession().subscribe(res=>{
      console.log(res)
      this.user = res
    })
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log(this.myData)
    });
    
  }
  role : any


}
