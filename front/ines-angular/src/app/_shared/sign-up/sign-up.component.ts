import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { translateSubject } from 'src/app/services/translate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  lang : any
  user : User = new User();
  myData : any
  constructor(private translateSubject: translateSubject ,private _service:UserService,private router:Router , private translate: TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
    this.translate.use(this.lang);
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log('register',this.myData)
    });
    if(this._service.isLoggedIn())
    this.router.navigateByUrl('/home')
    this.user.role = Role.SIMPLE_USER;
  }

  translateLanguageTo(lang: any) {
    localStorage.setItem('lang' ,lang.target.value )
    this.translate.use(lang.target.value);
    this.translateSubject.updateMyData(lang.target.value)
  }

  signUp()
  {
    this._service.signUp(this.user).subscribe(
      data => this.router.navigateByUrl('/login')
    )
   // console.log(this.user)
  }
}
