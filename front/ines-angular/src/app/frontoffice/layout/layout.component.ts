import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private _service:UserService,private router: Router) { }

  ngOnInit(): void {
    if(!this._service.isLoggedIn())
    this.router.navigateByUrl('/login')
    
  }

  signout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
}
