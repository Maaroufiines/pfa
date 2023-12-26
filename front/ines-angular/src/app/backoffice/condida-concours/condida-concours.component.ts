import { Component, OnInit } from '@angular/core';
import { ConcoursService } from 'src/app/services/concours.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-condida-concours',
  templateUrl: './condida-concours.component.html',
  styleUrls: ['./condida-concours.component.css']
})
export class CondidaConcoursComponent implements OnInit {
  concours: any
  user: any
  visible: boolean = false
  bac: any
  prefac: any
  deufac: any
  pfe: any
  score: any
  ing:any
  constructor(private concoursService: ConcoursService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
    this.getAllConcours()

  }

  getUser() {
    this.userService.getSession().subscribe(res => {
      console.log(res)
      this.user = res


    })
  }

  getAllConcours() {
    this.concoursService.getAllConcours().subscribe(res => {
      console.log(res)
      this.concours = res
      this.concours.map((i: any) => {
        var foundItem = i.enrolledUsers.find((j: any) => {
          console.log(j)
          return j.idUser === this.user.idUser
        });
        console.log(foundItem + 'yes');

        if (foundItem) {
          i.hide = 'yes'
        }
      })
    })
  }
  add(c: any) {
    console.log(c.scoor)
    this.score = c
    this.visible = true

  }

  save() {
    console.log(this.score);
    if ((Number(this.bac) * 2 + Number(this.prefac) * 2 + Number(this.deufac) * 2 + Number(this.pfe) * 2 + Number(this.ing)) < Number(this.score.scoor)) {
      this.visible = false

      Swal.fire(
        'Sroce',
        "Vous n'êtes pas autorisé à déposer dans ce concours.",
        'error'
      ).then(() => {
        this.bac = null
        this.pfe = null
        this.prefac = null
        this.deufac = null
      })
    } else {
      this.concoursService.addUserConcours(this.score.id, this.user.idUser).subscribe(res => {
        this.visible = false
        console.log(res)
        Swal.fire(
          'Concours',
          'Vous étes participer au concour',
          'success'
        ).then(() => {
          this.concours = {}
        }).then(res => {
          this.getAllConcours()
        })
      })
    }
  }

}
