import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;
  user:string ="";
  constructor(
  private router:Router,
  private service:UserService
  ) { }

  ngOnInit(): void {
   this.service.getSession().subscribe(
    data => this.user = data.firstName + " " + data.lastName
   )
  };
  signout()
  {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  
  

  }


