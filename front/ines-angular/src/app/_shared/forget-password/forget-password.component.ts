import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  user_check : User = new User();
  viewModal = false;
  constructor(private _service:UserService) { }

  ngOnInit(): void {
  }

  retrieve()
  {
    this.check_exist();

  }

  check_exist() 
  {
    this._service.getUserByEmail(this.user_check.email).subscribe(
     data => {
      if(data != null)
      {
      this.viewModal = true;
      }
     }
    )
  }
}
