import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/authRequest';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { translateSubject } from 'src/app/services/translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authrequest: AuthRequest = new AuthRequest();
  verify: boolean = true;
  response: any;
  lang: any
  myData:any
  isPasswordVisible: boolean = false;
  constructor(private translateSubject: translateSubject, private _service: UserService, private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang')
    this.translate.use(this.lang);
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log('login',this.myData)
    });
    if (this._service.isLoggedIn())
      this.router.navigateByUrl('')


  }
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  translateLanguageTo(lang: any) {
    localStorage.setItem('lang', lang.target.value)
    this.translate.use(lang.target.value);
    this.translateSubject.updateMyData(lang.target.value)
  }

  public auth() {
    this.getAccessToken(this.authrequest);
  }

  public getAccessToken(authRequest: AuthRequest) {



    this._service.generateToken(authRequest).subscribe(data => {
      console.log(data);


      if (data != null) {
        if (typeof data === 'object' && data !== null) {
          const value = data['token'];

          localStorage.setItem("token", value);

          this._service.getSession().subscribe(
            data => {
              if (data.role == Role.ADMIN) {

                this.router.navigateByUrl('/concours')
              }

              else {
                console.log('client')

                this.router.navigateByUrl('condidat/concours')
              }
            }
          );

        }


        else
          this.verify = false;
      }
      else {
        this.verify = false;
      }

    }
    );
  }
}
