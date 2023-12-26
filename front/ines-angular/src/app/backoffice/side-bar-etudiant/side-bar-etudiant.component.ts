import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { translateSubject } from 'src/app/services/translate.service';
@Component({
  selector: 'app-side-bar-etudiant',
  templateUrl: './side-bar-etudiant.component.html',
  styleUrls: ['./side-bar-etudiant.component.css']
})
export class SideBarEtudiantComponent implements OnInit {

  constructor(private translate: TranslateService , private  translateSubject : translateSubject , private router: Router ) { }
  myData : any
  ngOnInit(): void {
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log(this.myData)
    });
  }

  goToProfil(){
    this.router.navigateByUrl('profile')
  }

}
