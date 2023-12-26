import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { translateSubject } from 'src/app/services/translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  user!: User;
  oldPassword: string = "";
  newPassword: string = "";
  message: string = "";
  succMessage: string = "";
  myData : any
  constructor(private service: UserService ,  private translateSubject : translateSubject ,private translate: TranslateService) { }

  ngOnInit(): void {
    this.service.getSession().subscribe(
      data => {
        this.user = data;
      }
    )
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log(this.myData)
    });
  }

  update() {

    if (this.oldPassword != "" || this.newPassword != "") {
      if (this.oldPassword != "") {
        if (this.newPassword != "") {
          this.service.verifyPassword(this.oldPassword, this.user.password).subscribe(
            data => {
              console.log(data)
              if (data == true) {
                
                this.user.password = this.newPassword;
                this.service.signUp(this.user).subscribe(
                  () => this.succMessage = "updated!"
                );
              } else
              {
                this.message = "old password invalid!"
                console.log("not valid")
              }
                
            }
          )



        }
        else
          this.message = "new password required!"
      }
      else this.message = "old password required!"
    }
    else {
      this.service.signUp(this.user).subscribe(
        () => this.succMessage = "updated!"
      );
    }
  }

}
