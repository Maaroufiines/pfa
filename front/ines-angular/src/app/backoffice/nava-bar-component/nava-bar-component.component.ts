import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { translateSubject } from 'src/app/services/translate.service';

@Component({
  selector: 'app-nava-bar-component',
  templateUrl: './nava-bar-component.component.html',
  styleUrls: ['./nava-bar-component.component.css']
})
export class NavaBarComponentComponent implements OnInit {

  constructor(private translate: TranslateService , private router : Router , private  translateSubject : translateSubject) { }
  lang : any
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
    this.translate.use(this.lang);
  }

  translateLanguageTo(lang: any) {
    localStorage.setItem('lang' ,lang.target.value )
    this.translate.use(lang.target.value);
    this.translateSubject.updateMyData(lang.target.value)
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('login')
  }

}
