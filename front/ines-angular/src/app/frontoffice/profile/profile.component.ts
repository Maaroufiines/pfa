import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  oldPassword: string = "";
  newPassword: string = "";
  message: string = "";
  succMessage: string = "";
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getSession().subscribe(
      data => {
        this.user = data;
      }
    )
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
